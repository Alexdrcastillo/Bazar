import product from "../models/product.js";

export const postProduct = async (req, res) => {
    try {
        const { price, category, stock, images, description, brand } = req.body;

          const post = new product({price, category, stock, images, description, brand})
        
            await post.save();
            res.json(post)
    } catch (error) {
        res.json(error)
    }
}