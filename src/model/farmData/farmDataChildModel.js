import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
  },
  parentid: {
    type: String,
  },
  animal: {
    type: String,
  },
  age: {
    type: String,
  },
  uniquename: {
    type: String,
  },
  birth_date: {
    type: String,
  },
  gender: {
    type: String,
  },
  breed: {
    type: String,
  },
  kid_code: {
    type: String,
  },
  kid_score: {
    type: String,
  },
  birth_type: {
    type: String,
  },
  weight: {
    type: String,
  },
  wean_date: {
    type: String,
  },
  wean_weight: {
    type: String,
  },
  mother_wean_weight: {
    type: String,
  },
  mother_wean_date: {
    type: String,
  },
  castration: {
    type: String,
  },
  kid_comment: {
    type: String,
  },
},{strict: false});

export default mongoose.model("Child", UserSchema);
