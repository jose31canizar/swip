export type User = {
  fullName: string,
  email: string,
  myId: string
};

export type Error = string;

export type Message = {
  createdAt: Date,
  text: string,
  userId: string,
  _id: string
};

export type Conversation = {
  friendId: string,
  id: string
};
