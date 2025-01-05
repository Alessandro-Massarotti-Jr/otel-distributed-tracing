import { FastifyInstance } from "fastify";
import { prismaClient } from "./config/prisma";

export default async function routes(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    const data = await prismaClient.category.findMany();
    reply.send({
      message: "categories",
      data,
    });
  });
}
