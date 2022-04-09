import Category from "../models/category";
import Products from "../models/products";


// API list danh mục
export const list = async(req, res) => {
    try {
        // const products = await Product.find();
        const cate = await Category.find().sort({ createAt: -1 });
        res.json(cate);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được danh mục"
        })
    }
}


// API thêm danh mục
export const create = async(req, res) => {
    try {
        const cate = await new Category(req.body).save();
        res.json(cate)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được danh mục"
        })
    }
}

// API xóa danh mục
export const remove = async(req, res) => {
    const condition = { _id: req.params.id }
    try {
        const cate = await Category.findOneAndDelete(condition);
        res.json(cate)
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
        const cate = await Category.findOneAndUpdate(condition, doc, option);
        res.json(cate)
    } catch (error) {
        res.status(400).json({
            message: "Không sửa được!"
        })
    }
}


// API list 1 sản phẩm
export const readProductOnCate = async(req, res) => {
    const filter = { _id: req.params.id };
    try {
        const category = await Category.findById(filter);
        const product = await Products.find({ category }).select('-category').exec();
        res.json({
            category,
            product
        });
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
}