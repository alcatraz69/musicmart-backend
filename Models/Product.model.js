import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "name is required",
    },
    image: {
      type: String,
      required: "image is required",
    },
    price: {
      type: String,
      required: "price is required",
    },
    category: {
      type: String,
      required: "category is required",
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: "rating is required",
    },
    fastDelivery: {
      type: Boolean,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
