import { Router } from "express";
// import { route } from "express/lib/application";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();

const products = [
    { id: 1, name: "Name A" },
    { id: 2, name: "Name B" },
    { id: 3, name: "Name C" },
];
router.get('/products', checkAuth, (req, res) => {
    res.json(products);
});
router.get('/product/:id', checkAuth, (req, res) => {
    res.json(products.find(item => item.id === +req.params.id));
});
router.post('/products', checkAuth, (req, res) => {
    products.push(req.body);
    res.json(products);
});
router.delete('/product/:id', checkAuth, (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id))
})
export default router