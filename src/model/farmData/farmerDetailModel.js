import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
  },
  name: {
    type: String,
  },
  number: {
    type: String,
  },
  farmname: {
    type: String,
  },
  farmtype: {
    type: String,
  },
  address: {
    type: String,
  },
  noofanimal: {
    type: String,
  },
});

export default mongoose.model("FarmerDetail", UserSchema);
