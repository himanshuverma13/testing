import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true
  },
  uid: {
    type: String,
    // required: true
  },
  mobileNumber: {
    type: String,
    // required: true
  },
  email: {
    type: String,
  },
  address: {
    type: String,
    // required: true
  },
  amount: {
    type: Number,
    // required: true
    
  },
  transactionID: {
    type: String,
    // required: true
  },
  paymode: {
    type: String,
    // required: true
  
  },
  cod_payment: {
    type: String,
    // required: true
  },
  image:{
    type: String,
    // required: true
  },
  cart:{
    type: Array,
    // required: true
  }
 
},
{
  timestamps:true,
}
);

export default mongoose.model("Transaction", UserSchema);
