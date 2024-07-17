// pkgs import
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { app, server } from "./socket/socket.js";

// files import
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
// variables
// const app = express();
const PORT = process.env.PORT || 8000;

//:: APP MIDDLEWARE

app.use(express.json());    // to parse incoming requests with JSON payloads (from req.body)
app.use(cookieParser());    // to parse the incoming cookies form req.cookies

// -----------:: API :: -----------------
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get('/',(req,res)=>{
//     // root route http://localhost:5000/
//     res.send('<h3 style="color:green;"> Lonewolf is hunting... </h3>');
// })


server.listen(PORT, () => {
    connectToMongoDB();
    console.log('Server is running on ' + PORT);
});