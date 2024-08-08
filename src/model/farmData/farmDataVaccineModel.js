import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  parentid: {
    type: String,
  },
  vaccine: {
    type: String,
  },
  vaccine_date: {
    type: String,
  },
});

export default mongoose.model("Vaccine", UserSchema);
