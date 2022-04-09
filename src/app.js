import express from "express";
import cors from 'cors';
import morgan from "morgan";
import mongoose from "mongoose";
import productRouter from "../routers/product";
import authRouter from "../routers/auth";
import userRouter from "../routers/user";
import cateRouter from "../routers/category";


const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())


// Router
app.use("/api", productRouter);
app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", cateRouter);


// connect database
mongoose.connect('mongodb://localhost:27017/dataAssignment')
    .then(() => console.log("Kết nối database thành công"))
    .catch((error) => console.log(error));

// connection
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server dang chạy cổng", PORT);
})