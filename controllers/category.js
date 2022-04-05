import Category from "../models/category";


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
            message: "Không thêm được sản phẩm"
        })
    }
}