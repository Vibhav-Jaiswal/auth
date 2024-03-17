import Conversation from "../models/conversation.model.js";
import Message from "../models/messages.model.js";
import { errorHandler } from "../utils/error.js";

export const sendMessage = async (req, resp, next) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user.id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //Socket.io functionality go here

    
    // await conversation.save();
    // await newMessage.save();

    //this will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    resp.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};
