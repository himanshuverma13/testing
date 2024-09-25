import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const UserSchema = new mongoose.Schema({
  id: {
    type: ObjectId,
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
  stock: {
    type: Number,
    // required: true,
  },

});

export default mongoose.model("AddToCart", UserSchema);
