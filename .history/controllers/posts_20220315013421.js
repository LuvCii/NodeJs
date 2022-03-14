import mongoose from "mongoose";


// 1 Khởi tạo model
const Post = mongoose.model('Post', { name: String, title: String, des: String });


// API list post
export const list = async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được bài post"
        })
    }
}

// API list 1 bài post
export const read = async(req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id }).exec();
        res.json(post);
    } catch (error) {
        res.status(400).json({
            error: "Không có bài viết"
        })
    }
}


// API thêm bài viết
export const create = async(req, res) => {
    try {
        const posts = await new Post(req.body).save();
        res.json(posts)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được bài viết anh ei"
        })
    }
}


// API xóa bài viết
export const remove = async(req, res) => {
    try {
        const posts = await Post.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(posts)
    } catch (error) {
        res.status(400).json({
            message: "Không xóa được bài viết anh ei"
        })
    }
}


// API update bài viết
export const update = async(req, res) => {
    const condition = { _id: req.params.id }
    const update = req.body
    try {
        const post = await Post.findOneAndUpdate(condition, update).exec()
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: "Không sửa được!"
        })
    }
}