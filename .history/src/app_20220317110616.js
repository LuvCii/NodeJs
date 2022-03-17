import express from 'express';
import morgan from 'morgan'; // log các thông tin từ client gửi lên
import cors from 'cors'; // cấp quyền truy cập api
import productRouter from '../routers/product';
import postRouter from '../routers/post';
import userRouter from '../routers/user';
import cateRouter from '../routers/category'
import mongoose from 'mongoose';

const app = express();
// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())


// router
app.use("/api", productRouter); // bắt buộc phải có api đứng trước
app.use("/api", postRouter);
app.use("/api", userRouter);
app.use("/api", cateRouter);

//connect database
mongoose.connect('mongodb://localhost:27017/myData')
    .then(() => console.log("Kết nối database thành công"))
    .catch((error) => console.log(error));



// connection
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server dang chạy cổng", PORT);
})