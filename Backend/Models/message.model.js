import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    SenderID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' ,
        required: true
    }, // the author of this message
    RecieverID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' ,
        required: true
    }, // the author of this message
    message:{
        type : String,
        required : true,
    }
    // createdAt, updatedAt
},{timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message