import axios from "axios"
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"

export const getAllProducts = (product) => {
  return async function(dispatch) {
    const getProducts = await axios.get(`http://localhost:4000/search/?search=${product}`);
    const products = getProducts.data.map(product => {
        return {
          description: product.description,
          images: product.images,
          category: product.category,
          brand: product.brand,
          stock: product.stock,
          price: product.price,
          title: product?.title
        }
    });
    dispatch({type: GET_ALL_PRODUCTS, payload:products});
  };
};
