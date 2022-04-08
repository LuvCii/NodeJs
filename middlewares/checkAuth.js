import expressJWT from 'express-jwt';
export const checkAuth = (req, res, next) => {
    const status = true;
    if (status) {
        next();
    } else {
        console.log("Anh không có quyền truy cập");
    }
}


export const requireSignin = expressJWT({
    // thuật toán 
    algorithms: ["HS256"],
    // mã bảo mật
    secret: "123456",
    // lưu toàn bộ thông tin
    requestProperty: "auth" // req.auth
});


export const isAuth = (req, res, next) => {
    console.log('req.profile', req.profile);
    console.log('req.auth', req.auth);

    const status = req.profile._id == req.auth._id;
    if (!status) {
        res.status(400).json({
            message: "Ban khong co quyen truy cap"
        })
    }
    next();
}
export const isAdmin = (req, res, next) => {
    if (req.profile.role === 0) {
        res.status(401).json({
            message: "bạn không phải là admin"
        })
    }
    next();
}




// - Đầu tiên Kiểm tra xem email người dùng đã tồn tại trong hệ thống hay chưa?
// - Nếu chưa tồn tại thì reject: User not found.
// - Nếu tồn tại user thì sẽ lấy password mà user truyền lên, mã hóa và so sánh với mật khẩu của user lưu trong Database
// - Nếu password sai thì reject: Password is incorrect.
// - Nếu password đúng thì chúng ta bắt đầu thực hiện tạo mã JWT và gửi về cho người dùng.