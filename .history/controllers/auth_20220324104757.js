import User from "../models/users";
// import mongoose from "mongoose";

export const signup = async(req, res) => {
    const { email, name, password } = req.body
    try {
        const existUser = await User.findOne({ email }).exec();
        // key và value giống nhau thì viết 1 cái
        if (existUser) {
            res.json({
                message: "Email đã tồn tại"
            })
        };
        const user = await new User({ email, name, password }).save();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {

    }
}

export const signin = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
            res.status(400).json({
                message: "Email không tồn tại"
            })
        }
        if (!user.authenticate(password)) {
            res.status(400).json({
                message: "Sai mật khẩu"
            })
        }
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {

    }
}