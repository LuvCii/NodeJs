import Category from "../models/category";
import Products from "../models/products";




// API list danh mục
export const list = async(req, res) => {
    try {
        const category = await Category.find();
        // const products = await Product.find().sort({ createAt: -1 });
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

export const create = async(req, res) => {
    try {
        const category = await new Category(req.body).save()
        res.json(category)
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const read = async(req, res) => {
    try {
        const category = await Category.findOne({ _id: req.params.id }).exec();
        const products = await Products.find({ category }).select("-category").exec();
        res.json({
            category,
            products
        })
    } catch (error) {

    }
}