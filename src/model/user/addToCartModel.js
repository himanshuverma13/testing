import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  uid: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  name: {
    type: String,
    // required: true,
  },
  img: {
    type: Array,
    // required: true,
  },
});

export default mongoose.model("AddToCart", UserSchema);
