import UserData from "../Models/user.model.js";

// to get user who has registered in the sidebar
export const getUserforSidebar = async (req,res) =>{
    try {
        const loggedinUser = req.user._id;
        const filteredUsers = await UserData.find({_id: {$ne: loggedinUser}}).select("-password");
        res.status(200).json(filteredUsers)
    } 
    catch (error) {
        console.error("Error in getuserforSidebar Controller : " , error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
} 