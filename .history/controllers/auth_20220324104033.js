import User from "../models/users";
// import mongoose from "mongoose";

export const singup = async(req, res) => {
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