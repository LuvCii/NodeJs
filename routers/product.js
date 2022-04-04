import { Router } from "express";
import { list, create, read, remove, update } from '../controllers/products';
// import { route } from "express/lib/application";
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";
import { userById } from "../controllers/user";
const router = Router();


// resful API
router.get('/products', checkAuth, list);
router.get('/product/:id', checkAuth, read);
router.post('/product/:userId', requireSignin, isAuth, isAdmin, create);
router.delete('/product/:userId/:id', requireSignin, isAuth, isAdmin, remove);
router.patch("/product/:id", checkAuth, update)

router.param("userId", userById);

export default router