import axios from "axios";
import { Router } from "express";
const router = Router();
router.get("/", async (request, response, next) => {
  const { CATEGORY_SERVICE_URL, PRODUCT_SERVICE_URL } = process.env;

  const {
    data: { data: products },
  } = await axios.get(`${PRODUCT_SERVICE_URL}/products`);

  const {
    data: { data: categories },
  } = await axios.get(`${CATEGORY_SERVICE_URL}/categories`);

  response.json({
    message: "gateway response",
    data: products.map((product: any) => {
      return {
        ...product,
        categories,
      };
    }),
  });
});

export { router };
