import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, index: true },
    value: { type: Number, require: true },
  },
  {
    timestamps: true,
    strict: true,
  }
);

export { ProductSchema };
