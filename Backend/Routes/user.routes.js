import express from "express";
import protectRoute from "../Middleware/protextroute.js";
import { getUserforSidebar } from "../Controller/user.controller.js";

const router = express.Router();

router.get('/',protectRoute, getUserforSidebar)

export default router