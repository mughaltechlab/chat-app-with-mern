import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res)=>{
    try {
        const {message} = req.body;
        const {id: recieverId} = req.params;
        const senderId = req.user._id;

        // here we check that their is any conversation bw sender and reciever
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] },
        })

        // if their is no any conversation bw sender and reciever so create one
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, recieverId],
            })
        }

        const newMessage = new Message({
            // senderId: senderId,,
            // recieverId: recieverId,,
            // message: message
            senderId,
            recieverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // :: SOCKET.IO FUNCTIONALITY WILL GO HERE ::
        
        // :: this will slow the process
        // await conversation.save();
        // await newMessage.save();

        // :: This will run parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        // console.log({newMessage});

        res.status(201).json(newMessage);

    } catch (e) {
        console.log("Error in sendMessage controller: ", e.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const getMessages = async (req,res)=>{
    try {

        const {id: userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all : [senderId, userToChatId]}
        }).populate("messages");    // :: NOT REFERENCE BUT GIVES ACTUAL MESSAGES ::

        if (!conversation) {
            return res.status(200).json([]);            
        }

        const msgs = conversation.messages;
        
        res.status(200).json(msgs);
        
    } catch (e) {
        console.log("Error in getMessages controller: ", e.message);
        res.staus(500).json({error: "Internal server error"});
    }
}