import Conversation from "../models/conversation";
import Message from "../models/message";

const createMessage = message => {
  Conversation.findById(message.conversationId).then(conversation => {
    const textMessage = new Message({
      text: message.text,
      userId: message.senderId
    });
    textMessage.save().then(savedMessage => {
      conversation.messages.push(savedMessage);
      conversation.save();
    });
  });
};

export default createMessage;
