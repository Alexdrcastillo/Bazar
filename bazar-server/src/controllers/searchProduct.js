const product = require("../models/product.js");

const searchProduct = async (req, res) => {
    try {
        const { search } = req.query;

        // Buscar en 'brand' y 'category' al mismo tiempo
        const seeker = await product.find({ 
            $or: [
                { brand: search },
                { category: search }
            ]
        });

        if (seeker.length === 0) {
            return res.json("no se encontro");
        }

        return res.json(seeker);
    } catch (error) {
        res.json(error);
    }
}

module.exports = { searchProduct };
