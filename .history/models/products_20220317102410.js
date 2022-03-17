import mongoose, { Schema } from "mongoose";
import mongoose, { Schema, ObjectId } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        minlength: 5,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });
export default mongoose.model('Product', productSchema);