// pkgs import
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// files import
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
// variables
const app = express();
const PORT = process.env.PORT || 5000;

//:: APP MIDDLEWARE

app.use(express.json());    // to parse incoming requests with JSON payloads (from req.body)
app.use(cookieParser());    // to parse the incoming cookies form req.cookies

// -----------:: API :: -----------------
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

// app.get('/',(req,res)=>{
//     // root route http://localhost:5000/
//     res.send('<h3 style="color:green;"> Lonewolf is hunting... </h3>');
// })


app.listen(PORT, () => {
    connectToMongoDB();
    console.log('Server is running on ' + PORT);
});