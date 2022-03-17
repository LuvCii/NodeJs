import Categories from "../models/categories";
import Products from "../models/products";

export const create = async(req, res) => {
    try {
        const categories = await new Categories(req.body).save()
        res.json(categories)
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const read = async(req, res) => {
    try {
        const category = await Category.findOne({ _id: req.params.id }).exec();
        const products = await Product.find({ category }).select("-category").exec();
        res.json({
            category,
            products
        })
    } catch (error) {

    }
}