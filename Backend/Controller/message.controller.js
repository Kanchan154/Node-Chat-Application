import Conversation from "../Models/Conversation.model.js";
import Message from "../Models/message.model.js";
import { getReceiverSocketId } from "../Socket/Socket.js";
import { io } from "../Socket/Socket.js";

// to send message from one user to another 
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: RecieverID } = req.params;
        const SenderID = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [SenderID, RecieverID] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [SenderID, RecieverID],
            });
        }

        const newMessage = new Message({
            SenderID,
            RecieverID,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        
        // save both the message and conversation in parallel
        await Promise.all([conversation.save(), newMessage.save()])
        
        // SOCKET IO functionaity will go here
        const receiverSocketId = getReceiverSocketId(RecieverID);
        if(receiverSocketId){
            // io.to().emit() is used to send events to specific client
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }
        
        res.status(201).json(newMessage)


    }
    catch (error) {
        console.error("Error in sendMessage Controller : ", error.message)
        res.status(500).json({ error: "Internal Server Error" })

    }
}

// to display the message 
export const getMessage = async (req, res) => {
    try {
        const { id: usertoChatId } = req.params;
        const SenderID = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [SenderID, usertoChatId] },
        }).populate("messages");            //not references but messages itself 

        // if there is no conversation between the sender and the reciever then it will display the empty data and prevent the error
        if (!conversation) return res.status(200).json([])

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        console.error("Error in getMessage Controller : ", error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
}