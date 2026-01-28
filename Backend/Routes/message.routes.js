import express from "express";
import { sendMessage, getMessage } from "../Controller/message.controller.js";
import protectRoute from "../Middleware/protextroute.js";

const router = express.Router();
// send message route
router.post("/send/:id", protectRoute, sendMessage);
// get message route
router.get('/:id', protectRoute, getMessage)

export default router;
