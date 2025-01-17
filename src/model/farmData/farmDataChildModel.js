import mongoose from "mongoose";
 
const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
  },
  parentid: {
    type: String,
  },
  parentName: {
    type: String,
  },
  animal: {
    type: String,
  },
  age_year: {
    type: String,
  },
  age_month: {
    type: String,
  },
 
 
  uniquename: {
    type: String,
  },
  birth_date: {
    type: String,
  },
  gender: {
    type: String,
  },
  breed: {
    type: String,
  },
  kid_code: {
    type: String,
  },
  kid_score: {
    type: String,
  },
  birth_type: {
    type: String,
  },
  weight_kg: {
    type: String,
  },
  weight_gm: {
    type: String,
  },
  wean_date: {
    type: String,
  },
  wean_weight_kg: {
    type: String,
  },
  wean_weight_gm: {
    type: String,
  },
  mother_wean_weight_kg: {
    type: String,
  },
  mother_wean_weight_gm: {
    type: String,
  },
  mother_wean_date: {
    type: String,
  },
  castration: {
    type: String,
  },
  kid_comment: {
    type: String,
  },
}, { strict: false });
 
export default mongoose.model("Child", UserSchema);
 