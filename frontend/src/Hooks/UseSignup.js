import react, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext';

const UseSignup = () => {
  const [loading,setloading] = useState(false);
  const {setauthUser} = useAuthContext()

  const signup = async({fullname,username,password,confirmPassword,gender}) => {
    const success = handleinputErrors({fullname,username,password,confirmPassword,gender});
    if(!success) return;

    setloading(true)
    try {
        const res = await fetch("/api/auth/signup",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({fullname, username, password,confirmPassword, gender})
        })

        const data = await res.json();
        if(data.error){
            throw new Error(data.error)
        }
        // localStorage 
        localStorage.setItem("chat-user", JSON.stringify(data))

        // context
        setauthUser(data);

    } catch (error) {
        toast.error(error.message)
    }
    finally{
        setloading(false)
    }
  }

  return {loading,signup}
}
export default UseSignup;


function handleinputErrors ({fullname,username,password,confirmPassword,gender}){
    if(!fullname || !username || !password || !confirmPassword || !gender){
        toast.error('Please fill in all the feilds')
        return false
    }

    if(password !== confirmPassword){
        toast.error("Password Didn't match")
        return false;
    }

    if(password.length < 8){
        toast.error('Password must be atleast 8 characters')
        return false;
    }

    return true
}