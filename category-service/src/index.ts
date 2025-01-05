import { server } from "./server";

const { PORT } = process.env;
server.listen({ port: Number(PORT), host: "0.0.0.0" }).then(() => {
  console.log(`server running at ${PORT}`);
});
