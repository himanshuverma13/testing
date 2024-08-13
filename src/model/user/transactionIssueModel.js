import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    transaction_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },

    transaction_issue: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("TransactionIssue", UserSchema);
