import axios from "axios"
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
const GET_ALL_PRODUCT = "GET_ALL_PRODUCT"


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


export const getAllProduct = (product) => {
  return async function(dispatch) {
    const getProducts = await axios.get(`http://localhost:4000/products`);
    const product = getProducts.data.map(product => {
        return {
           id: product._id,
          description: product.description,
          images: product.images,
          category: product.category,
          brand: product.brand,
          stock: product.stock,
          price: product.price,
          title: product?.title
        }
    });
    dispatch({type: GET_ALL_PRODUCT, payload:product});
  };
};
