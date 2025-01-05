import { server } from "./server";

const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
