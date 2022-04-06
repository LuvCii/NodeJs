import { Router } from "express";
import { list, create, read, remove, update, search } from '../controllers/products';
// import { route } from "express/lib/application";
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";
import { userById } from "../controllers/user";
const router = Router();


// resful API
router.get('/products', checkAuth, list);
router.get('/products/:id', checkAuth, read);
router.post('/product/:userId', requireSignin, isAuth, isAdmin, create);
router.delete('/product/:userId/:id', requireSignin, isAuth, isAdmin, remove);
router.patch("/product/:userId/:id", requireSignin, isAuth, isAdmin, update);
router.get('/search', search)

router.param("userId", userById);

export default router