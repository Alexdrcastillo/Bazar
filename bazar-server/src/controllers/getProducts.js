import products from "../models/product.js"

export const getProducts = async (req, res) => {
  try {
    
    const allProducts = await products.find()

    res.json(allProducts)

  } catch (error) {
    res.json(error)
  }
}