import Message from "../models/message.model.js";

export const sendMessage = (req,res)=>{
    try {
        const {message} = req.body;
        const {id} = req.params;
        const senderId = req.user._id;

    } catch (e) {
        console.log("Error in sendMessage controller: ", e.message);
        res.status(500).json({error: "Internal server error"});
    }
}