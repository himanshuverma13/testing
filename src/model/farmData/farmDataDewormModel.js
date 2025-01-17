import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  parentid: {
    type: String,
  },
  parentName: {
    type: String,
  },
  worm_date:{
    type:String,
  },
worm_report:{
    type:String,
},
endo_date:{
    type:String,
},
endo_name:{
    type:String,
},
endo_type:{
    type:String,
},
ecto_date:{
    type:String,
},
ecto_name:{
    type:String,
},
ecto_type:{
    type:String,
},
bath_date:{
    type:String,
},

  
});

export default mongoose.model("Deworm", UserSchema);
