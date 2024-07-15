import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../util/generateToken.js";

export const signup = async (req,res)=>{
    try {
        const {fullName, userName, password, confirmPassword, gender} = req.body;

        if (password != confirmPassword) {
            return res.status(400).json({error: "Password don't match"})
        }

        const user = await User.findOne({userName});

        if (user) {
            return res.status(400).json({error: "UserName already exists"})
        }

        // HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // avatar api url: https://avatar-placeholder.iran.liara.run/document

        // https://ui-avatars.com/api/?name=sahar

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
        // profilePic: `https://ui-avatars.com/api/?name=${userName}`,
        
        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        })

        if (newUser) {
            // Generate JWT token here
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();
            // successfully new user created
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic,
            })
            
        } else {
            res.status(400).json({error: "Invalid user data"});
        }
        
        
    } catch (e) {
        console.log("Error in SignUp controller", e.message);
        res.status(500).json({error: "Internal server error" });
    }
}

export const login = async (req,res)=>{
    try {
        const {userName, password} = req.body;
        const user = await User.findOne({userName});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({error: "Invalid username or password"});
        }

       generateTokenAndSetCookie(user._id,res);
       
       res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        userName: user.userName,
        profilePic: user.profilePic
       })
        
    } catch (e) {
        console.log("Error in Login controller", e.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const logout = async (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message: "Logout successfully"});
    } catch (e) {
        console.log("Error in logout controller", e.message);
        res.status(500).json({error: "Internal server error"});
    }
}