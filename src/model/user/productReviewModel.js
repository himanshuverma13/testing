import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  review: {
    type: String,
    required: true,
  },
  productid: {
    type: String,
    required: true,
  },    
});

export default mongoose.model("Review", UserSchema);
