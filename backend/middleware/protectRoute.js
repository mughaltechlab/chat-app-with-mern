import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next)=>{
    try {

        // get token from request cookies
        const token = req.cookies.jwt;

        // if token not found
        if (!token) {
            return res.status(401).json({error: "Unauthorized - No Token Provided"});
        }
        // verify token by decoding
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // if token found but not verified
        if(!decoded){
            return res.status(401).json({error: "Unauthorized - Invalid token"});
        }

        const user = await User.findById(decoded.userId).select("-password");   // .select("-password") means that: all data except their password

        if (!user) {
            return res.status(404).json({error: "User not found"});            
        }
        
        req.user = user;

        next();
        
        
    } catch (e) {
        console.log("Error in protectRoute middleware: ", e.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export default protectRoute;