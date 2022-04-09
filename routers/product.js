import { Router } from "express";
import { list, create, read, remove, update, listByCate } from '../controllers/products';
// import { route } from "express/lib/application";
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";
import { userById } from "../controllers/user";
const router = Router();


// resful API
router.get('/products', checkAuth, list);
router.get('/product/:id', checkAuth, read);
router.post('/products/:userId', requireSignin, isAuth, isAdmin, create);
router.delete('/product/:id', checkAuth, remove);
router.patch("/product/:id", checkAuth, update)

router.param("userId", userById);

export default router