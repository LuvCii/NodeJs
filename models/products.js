import mongoose, { Schema, ObjectId } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        text: true,
        index: true,
        minlength: 3,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
    keyword: {
        type: String,
        required: true
    }
}, { timestamps: true });
productSchema.index({ '$**': 'text' })
export default mongoose.model('Product', productSchema);