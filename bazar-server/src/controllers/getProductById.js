import product from "../models/product.js"

export const getProductById = async (req, res) => {
    try {

        const { id } = req.params;
        
    const productById = await product.findById(id)

      return res.json(productById)

    } catch (error) {
        res.json("no se encontro el producto")
    }
}