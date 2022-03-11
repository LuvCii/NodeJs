import { Router } from "express";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();


router.get('/api/products', check, (req, res) => {
    const products = [
        { id: 1, name: "Name A" },
        { id: 2, name: "Name B" }
    ];
    res.json(products);
})
router.post('/api/products', check, (req, res) => {
    console.log(req.body);
    const products = [
        { id: 1, name: "Name A" },
        { id: 2, name: "Name B" }
    ];
    products.push(req.body);
    res.json(products);
})
export default router