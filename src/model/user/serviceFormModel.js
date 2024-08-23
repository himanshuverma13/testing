import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  bestTimeToContact: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  landSize: {
    type: Number,   
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  other: {
    type: String,
  },
  need: {
    type: String,
    required: true,
  },
});

export default mongoose.model("ServiceForm", UserSchema);
