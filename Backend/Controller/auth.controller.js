import UserData from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import generatetikenandSetCookie from "../Utils/GenerateToken.js";


// Controller for SignUp Route
export const SignupUser = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;

        // checking whether the pasword and confirm password matches or not
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password didn't match" })
        }

        // chacking whether the User already exist or not
        const user = await UserData.findOne({ username })
        if (user) {
            return res.status(400).json({ error: "User Already Exists" })
        }

        // Hash Password Here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // creating avatar or profile pictures for the signed up user
        const BoyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const GirlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newuser = new UserData({
            fullname,
            username,
            password: hashedPassword,
            gender,
            ProfilePic: gender === "Male" ? BoyProfilePic : GirlProfilePic
        })

        if (newuser) {
            // generate jwt token
            generatetikenandSetCookie(newuser._id, res)

            await newuser.save();
            res.status(201).json({
                _id: newuser._id,
                fullname: newuser.fullname,
                username: newuser.username,
                ProfilePic: newuser.ProfilePic
            })
        }
        else {
            res.status(400).json({ error: "invalid user data" })
        }

    } catch (error) {
        console.error("Error in SignUp Controller : ", error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// Controller for Login Route
export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UserData.findOne({ username });

        // check whether the user exist or not 
        if (!user) return res.status(400).json({ error: 'User does not exist' });


        // checking whether the paseword match
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: 'Invalid Credentials (Username or Password)' })
        }

        // Calling Cookie
        generatetikenandSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            ProfilePic: user.ProfilePic,
        });

    } catch (error) {
        console.error("Error in Login Controller : ", error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// Controller for Logout Route
export const logoutUser = (req, res) => {
    try {
        // remove the token from cookies and set it to null
        res.cookie("jwt" , "" , {maxAge: 0})
        res.status(200).json({message: "Logged Out Successfully"})

        
    } catch (error) {
        console.error("Error in Logout Controller : " , error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}
