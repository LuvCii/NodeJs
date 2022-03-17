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
        const categories = await Categories.findOne({ _id: req.params.id }).exec();
        const products = await Products.find({ categories }).select("-categories").exec();
        res.json({
            categories,
            products
        })
    } catch (error) {

    }
}