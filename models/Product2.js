import mongoose from "mongoose";

const Product2Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product2 ||
  mongoose.model("Product2", Product2Schema);
