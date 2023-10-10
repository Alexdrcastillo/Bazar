const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
         price : {  type: Number, required: true },
         brand: { type: String, required: true },
         description: { type: String, required: true },
         stock: { type: Number },
         category: { type: String },
         images: {type: []}
    }
)

module.exports = mongoose.model("product", productSchema);
