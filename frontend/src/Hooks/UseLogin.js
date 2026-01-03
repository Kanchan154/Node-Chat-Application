import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../Context/AuthContext'

const UseLogin = () => {
    const [loading, setloading] = useState(false)
    const { setauthUser } = useAuthContext()

    const login = async (username, password) => {

        const success = handleinputErrors(username, password);
        if (!success) return

        setloading(true)
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })

            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }

            // localstorage
            localStorage.setItem("chat-user", JSON.stringify(data))

            // context 
            setauthUser(data)

        } catch (error) {
            toast.error(error.message)

        }
        finally {
            setloading(false)
        }
    }
    return { loading, login };
}

export default UseLogin;

function handleinputErrors(username, password) {
    if (!username || !password) {
        toast.error('Please fill in all the feilds')
        return false
    }

    return true
}