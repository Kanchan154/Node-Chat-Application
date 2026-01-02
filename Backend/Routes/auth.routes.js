import express from "express";
import { SignupUser, loginUser, logoutUser } from "../Controller/auth.controller.js";

const router = express.Router();

//Route for SignUp page
router.post("/signup", SignupUser);

// Router for Login page
router.post("/login", loginUser);

// Router For Logout of the user
router.post("/logout", logoutUser);

export default router