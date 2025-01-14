import "dotenv/config";
import { setUpTracing } from "./config/otel";
setUpTracing(process.env.SERVICE_NAME || "product-service");
import mongoose from "mongoose";
import express from "express";
import { router } from "./routes";
import cors from "cors";

const { MONGO_HOST } = process.env;
mongoose.connect(MONGO_HOST!);
const server = express();
server.use(express.json());
server.use(cors());
server.use("/products", router);

export { server };
