import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    content: {
      type: String,
    },

    keywords: {
      type: Array,
    },
    image: {
      type: String,
    },
    heading: {
      type: String,
    },
    description: {
      type: String,
    },

  },
  { timestamps: true }
);

export default mongoose.model("AdminBlog", Schema);
