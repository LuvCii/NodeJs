import mongoose from "mongoose";


// 1 Khởi tạo model
const Post = mongoose.model('Post', { name: String });


// API list sản phẩm
export const list = async(req, res) => {
    try {
        const posts = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được bài post"
        })
    }
}

// export const list = (req, res) => {
//     res.json(products);
// }
export const read = (req, res) => {
    res.json(products.find(item => item.id === +req.params.id));
}


// API thêm sản phẩm
export const create = async(req, res) => {
        try {
            const posts = await new Post(req.body).save();
            res.json(posts)
        } catch (error) {
            res.status(400).json({
                message: "Không thêm được sản phẩm anh ei"
            })
        }
    }
    // export const create = (req, res) => {
    //     const product = req.body
    //     res.json(product);
    // }
export const remove = (req, res) => {
    res.json(posts.filter(item => item.id !== +req.params.id));
}
export const update = (req, res) => {
    res.json(posts.map(item => item.id == req.params.id ? req.body : item));
}