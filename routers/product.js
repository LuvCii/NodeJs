import { Router } from "express";
import { list, create, read, remove, update, search, paginateResults } from '../controllers/products';
import { userById } from "../controllers/user";
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";

const router = Router();


// resful API
router.get('/products', checkAuth, list);
router.get('/products/:id', checkAuth, read);
// router.post('/product', create);
router.post('/product/:userId', requireSignin, isAuth, isAdmin, create);
router.delete('/product/:userId/:id', requireSignin, isAuth, isAdmin, remove);
router.patch("/product/:userId/:id", requireSignin, isAuth, isAdmin, update);
router.get('/search', search);
router.get('/product', paginateResults)

router.param("userId", userById);

export default router