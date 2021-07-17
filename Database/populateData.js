import { initialData } from "./Data.js";
import { Product } from "../Models/Product.model.js";

export const populateData = async () => {
  try {
    await Product.insertMany(initialData);
    console.log("data insertion done");
  } catch (error) {
    console.log(error);
  }
};
