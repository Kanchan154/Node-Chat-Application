import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const UseGetConversation = () => {
    const [loading, setloading] = useState(false)
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const GetConversation = async () => {
            setloading(true);
            try {
                const res = await fetch('/api/users');
                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error)
                }
                setConversations(data)
            } catch (error) {
                toast.error(error.message);
            }
            finally {
                setloading(false)
            }
        }

        GetConversation();
    }, []);
    return { conversations, loading };
}
export default UseGetConversation