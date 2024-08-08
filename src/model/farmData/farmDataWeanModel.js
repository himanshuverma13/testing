import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  parentid: {
    type: String,
  },
  post_wean_weight: {
    type: String,
  },
  post_body_score: {
    type: String,
  },
  post_wean_date: {
    type: String,
  },
  post_wean_comment: {
    type: String,
  },
});

export default mongoose.model("Wean", UserSchema);
