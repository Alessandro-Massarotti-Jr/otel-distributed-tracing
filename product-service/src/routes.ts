import { Router } from "express";
import mongoose from "mongoose";
import { ProductSchema } from "./schemas/ProductSchema";
const router = Router();
router.get("/", async (request, response, next) => {
  const { MONGO_PRODUCT_COLLECTION } = process.env;
  const productModel = mongoose.model(MONGO_PRODUCT_COLLECTION!, ProductSchema);
  const data = await productModel.find().lean();
  response.json({ message: "products", data });
});

export { router };
