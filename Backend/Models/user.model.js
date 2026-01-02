import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    ProfilePic: {
        type: String,
        default: ''
    }
    // createdAt, updatedAt => Member since <createdAt>
}, { timestamps: true })

const UserData = mongoose.model("User", UserSchema);

export default UserData;