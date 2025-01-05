import fastify, { FastifyInstance } from "fastify";
import routes from "./routes";
import { CustomError } from "./errors/CustomError";

const server: FastifyInstance = fastify({});

server.setErrorHandler((error, request, reply) => {
  if (error instanceof CustomError) {
    reply.status(error.httpStatusCode).send(error.toClient());
  }
  const customError = new CustomError({
    message: "Unexpected Error",
    original: error,
  });
  reply.status(customError.httpStatusCode).send(customError.toClient());
});

server.register(routes, { prefix: "/categories" });

export { server };
