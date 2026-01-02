import path from "path"

// Package Imports
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// FileImports or Routes
import authRoutes from './Routes/auth.routes.js'
import messageRoutes from './Routes/message.routes.js'
import userRouters from './Routes/user.routes.js';
import { app, server } from './Socket/Socket.js';       //importing Socket from Socket.js

// importing database connection 
import connectToMongoDB from './DB/ConnectionMongoDB.js';

// Variables
const PORT = process.env.PORT || 3001;

// Initializing the server and middleware
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/frontend/dist")))


// used to render if the url is mismatched to the output in the Application

// MiddleWares
dotenv.config();
app.use(express.json());// to parse incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

// used for routing SignUp, Login pages for the user 
app.use("/api/auth", authRoutes)

// used for routing messages pages for the user
app.use('/api/messages', messageRoutes)

// used to get users 
app.use("/api/users", userRouters)

app.get("*", (req, res) => {

    // setting the header 
    res.setHeader('Content-Type', 'text/html');
    // sending the file 
    const filePath = path.join(__dirname, "frontend", "dist", "index.html")
    res.sendFile(filePath)
})

server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
})