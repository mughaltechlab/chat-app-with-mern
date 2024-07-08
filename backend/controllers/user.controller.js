import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res)=>{
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: {$ne: loggedInUserId } }).select("-password"); // ($ne means not equal to)

        res.status(200).json(filteredUsers);
        
    } catch (e) {
        console.log("Error in getUsersForSidebar controller: ", e.message);
        res.status(500).json({error: "Internal server error"});
    }
}