// pkgs import
import express from "express";
import dotenv from "dotenv";

// files import
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
// variables
const app = express();
const PORT = process.env.PORT || 5000;

// middleware

app.use(express.json());    // to parse incoming requests with JSON payloads (from req.body)

// -----------auth api
app.use("/api/auth",authRoutes)

// app.get('/',(req,res)=>{
//     // root route http://localhost:5000/
//     res.send('<h3 style="color:green;"> Lonewolf is hunting... </h3>');
// })


app.listen(PORT, () => {
    connectToMongoDB();
    console.log('Server is running on ' + PORT);
});