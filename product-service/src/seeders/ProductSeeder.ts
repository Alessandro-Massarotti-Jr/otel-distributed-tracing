import mongoose from "mongoose";
import { ProductSchema } from "../schemas/ProductSchema";

export class ProductSeeder {
  static async run() {
    const { MONGO_HOST, MONGO_PRODUCT_COLLECTION } = process.env;
    const products = [
      { name: "Batata", value: 1000 },
      { name: "Cenoura", value: 2500 },
    ];
    await mongoose.connect(MONGO_HOST!);
    const productModel = mongoose.model(
      MONGO_PRODUCT_COLLECTION!,
      ProductSchema
    );
    for (const product of products) {
      await productModel.findOneAndUpdate(
        { name: product.name },
        { name: product.name, value: product.value },
        { new: true, upsert: true }
      );
    }
    await mongoose.connection.close();
  }
}
