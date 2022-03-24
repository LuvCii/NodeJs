import mongoose, { Schema } from "mongoose";
import { createHmac } from "crypto";

const userSchema = new Schema({
    name: {
        type: String,
        minlength: 5,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });
export default mongoose.model('Users', userSchema);