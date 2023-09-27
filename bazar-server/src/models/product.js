import mongoose from "mongoose";

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

export default mongoose.model("product", productSchema);