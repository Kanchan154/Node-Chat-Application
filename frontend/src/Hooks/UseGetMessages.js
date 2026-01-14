import { useEffect, useState } from "react"
import useConversation from "../Zustand/useConversation"
import toast from "react-hot-toast";

const UseGetMessages = () => {
    const [loading, setloading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        // get message hook
        const getMessages = async () => {
            setloading(true);
            try {
                const res = await fetch(`/api/messages/${selectedConversation._id}`, {
                    method: 'GET',
                    headers: { "Content-Type": 'application/json' },
                });

                const data = await res.json();
                if (data.error) throw new Error(data.error);

                setMessages(data)
            }
            catch (error) {
                toast.error(error.message);
            }
            finally {
                setloading(false);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages])

    // returning the functions that can be accessed by the components in the UI
    return { messages, loading };
}

export default UseGetMessages;
