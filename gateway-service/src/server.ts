import "dotenv/config";
import { setUpTracing } from "./config/otel";
setUpTracing(process.env.SERVICE_NAME || "gateway-service");
import express from "express";
import { router } from "./routes";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());
server.use("/", router);

export { server };
