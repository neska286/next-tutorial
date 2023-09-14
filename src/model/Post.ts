import mongoose, { Schema, Document } from 'mongoose';


export interface IPost extends Document {
  title:string;
  desc:string;
  img:string;
  content:string;
  username:string;
  timestamp: Date
}
const postSchema : Schema= new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  }
);

//If the Post collection does not exist create a new one.
export default  mongoose.models.Post<IPost>|| mongoose.model<IPost>("Post", postSchema)