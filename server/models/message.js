import mongoose, { Schema } from "mongoose";

var conversationSchema = new Schema(
  {
    text: String,
    createdAt: {
      type: Date,
      default: Date.now
    },
    userId: Object
  },
  { collection: "swip.message" }
);

export default mongoose.model("conversation", conversationSchema);
