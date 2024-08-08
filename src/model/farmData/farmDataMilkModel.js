import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  parentid: {
    type: String,
  },
  milk_for_kid: {
    type: String,
  },
  milk_volume: {
    type: String,
  },
  milk_date: {
    type: String,
  },
});

export default mongoose.model("Milk", UserSchema);
