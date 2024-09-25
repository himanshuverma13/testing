import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    priceText: {
      type: Number,
    },

    img: {
      type: Array,
      default:[]
    },

    metaDesc: {
      type: String,
    },

    Veg: {
      type: String,
    },

    Offer: {
      type: String,
    },

    Delivery: {
      type: String,
    },

    Refundable: {
      type: String,
    },

    Weight: {
      type: String,
    },

    Shortdescription: {
      type: String,
    },

    description: {
      type: String,
    },

    Instruction: {
      type: String,
    },

    Category: {
      type: Array,
      default: [],
    },

    Type: {
      type: String,
    },

    imgText: {
      type: String,
    },

    script: {
      type: Array,
    },
    video: {
      type: String,
    },
    stock: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AdminProduct", Schema);
