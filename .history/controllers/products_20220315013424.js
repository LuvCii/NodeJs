import mongoose from "mongoose";
// fake data
// const products = [
//     { id: 1, name: "Product A" }, // item
//     { id: 2, name: "Product B" } // item
// ];



// 1 Khởi tạo model
const Product = mongoose.model('Product', {
    name: String,
    price: Number,
    desc: String
});


// API list sản phẩm
export const list = async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

// API list 1 sản phẩm
export const read = async(req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
}


// API thêm sản phẩm
export const create = async(req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm anh ei"
        })
    }
}

// API xóa sản phẩm
export const remove = async(req, res) => {
    try {
        const products = await Product.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message: "Không xóa được sản phẩm anh ei"
        })
    }
}

// API update sản phẩm
export const update = async(req, res) => {
    const condition = { _id: req.params.id }
    const update = req.body
    try {
        const product = await Product.findOneAndUpdate(condition, update).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không sửa được!"
        })
    }
}