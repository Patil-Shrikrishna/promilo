import { getToken } from "../utils";

const getProducts = async () => {
  try {
    const access_token = getToken();
    const products = await fetch(
      "https://api.kalpav.com/api/v1/product/category/retail",
      {
        headers: {
          Authorization: `Basic ${access_token}`,
        },
      }
    );
    const data = await products.json();
    return data.response;
  } catch (err) {
    console.log("Can't fetch products: ", err);
  }
};
export default getProducts;
