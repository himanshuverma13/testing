import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  uniquename: {
    type: String,
  },
  uid: {
    type: String,
  },
  age: {
    type: String,
  },
  animal: {
    type: String,
  },
  height: {
    type: String,
  },
  date_of_purchesing: {
    type: String,
  },
  gender: {
    type: String,
  },
  weight: {
    type: String,
  },
  pregnancy_detail: {
    type: String,
  },
  male_detail: {
    type: String,
  },
  body_score: {
    type: String,
  },
  basic_comment: {
    type: String,
  },
});

export default mongoose.model("Parent", UserSchema);
