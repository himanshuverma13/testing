import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  parentid: {
    type: String,
  },
  heat: {
    type: String,
  },
  heat_date: {
    type: String,
  },
  heat_result: {
    type: String,
  },
  breeder_name: {
    type: String,
  },
  breed_date: {
    type: String,
  },
  due_date: {
    type: String,
  },
});

export default mongoose.model("Heat", UserSchema);
