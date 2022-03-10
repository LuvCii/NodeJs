import { Router } from "express";
const router = Router();

const check = (req, res, next) => {
    const status = true;
    if (status) {
        console.log("Hello");
        next();
    } else {
        console.log("Don't go");
    }
}
router.get('/api/products', check, (req, res) => {
    const products = [
        { id: 1, name: "Name A" },
        { id: 1, name: "Name B" }
    ];
    res.json(products);
})
export default router;