import mongoose, { Schema } from "mongoose";

var conversationSchema = new Schema(
  {
    userOneId: String,
    userTwoId: String,
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
      }
    ]
  },
  { collection: "swip.conversation" }
);

export default mongoose.model("conversation", conversationSchema);
