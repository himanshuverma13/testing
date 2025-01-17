import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  parentid: {
    type: String,
  },
  parentName: {
    type: String,
  },
  soil_date: {
    type: String,
  },
  limesprinkle_date: {
    type: String,
  },
  insecticide_date: {
    type: String,
  },
  insecticide: {
    type: String,
  },
});

export default mongoose.model("Sanitation", UserSchema);
