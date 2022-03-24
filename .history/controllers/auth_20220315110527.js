import User from "../models/users";
// import mongoose from "mongoose";


// 1 Khởi tạo model
// const Product = mongoose.model('Product', {
//     name: String,
//     price: Number,
//     desc: String
// });


// API list sản phẩm
export const list = async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

// API list 1 sản phẩm
export const read = async(req, res) => {
    const filter = { _id: req.params.id }
    try {
        const user = await User.findOne(filter);
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
}


// API thêm sản phẩm
export const create = async(req, res) => {
    try {
        const user = await new Users(req.body).save();
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm anh ei"
        })
    }
}

// API xóa sản phẩm
export const remove = async(req, res) => {
    const condition = { _id: req.params.id }
    try {
        const user = await User.findOneAndDelete(condition);
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "Không xóa được sản phẩm anh ei"
        })
    }
}

// API update sản phẩm
export const update = async(req, res) => {
    const condition = { _id: req.params.id };
    const doc = req.body;
    const option = { new: true };
    try {
        const product = await Product.findOneAndUpdate(condition, doc, option);
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không sửa được!"
        })
    }
}