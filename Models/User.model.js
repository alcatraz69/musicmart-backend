import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "title is required",
    },
    email: {
      type: String,
      required: "email is required",
    },
    password: {
      type: String,
      required: "password is required",
    },
    cart: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
      default: [],
    },
    wishlist: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
      default: [],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
