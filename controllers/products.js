import Product from "../models/products";
// import mongoose from "mongoose";



// API list sản phẩm
export const list = async(req, res) => {
    try {
        // const products = await Product.find();
        const products = await Product.find().sort({ createAt: -1 });
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}

// API list 1 sản phẩm
export const read = async(req, res) => {
    const filter = { _id: req.params.id }
    try {
        const product = await Product.findOne(filter);
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
            message: "Không thêm được sản phẩm"
        })
    }
}

// API xóa sản phẩm
export const remove = async(req, res) => {
    const condition = { _id: req.params.id }
    try {
        const products = await Product.findOneAndDelete(condition);
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message: "Không xóa được sản phẩm"
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


// API tìm kiếm
export const search = async(req, res) => {
    const query = req.query.q;
    try {
        console.log(query)
        const mongoResult = await Product.find({ $text: { $search: query } }, { score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } })
            // console.log(mongoResult);
            // const results = mongoResult.map(r => r.toObject());
            // res.send(results);
        res.json(mongoResult)
    } catch (error) {
        res.status(400).json(error)
    }
}