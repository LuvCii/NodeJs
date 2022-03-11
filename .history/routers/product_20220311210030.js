import { Router } from "express";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();

const products = [
    { id: 1, name: "Name A" },
    { id: 2, name: "Name B" }
];
router.post('/products', checkAuth, (req, res) => {
    console.log(req.body);
    const products = [
        { id: 1, name: "Name A" },
        { id: 2, name: "Name B" }
    ];
    products.push(req.body);
    res.json(products);
})
export default router