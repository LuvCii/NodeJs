import { Router } from "express";
import { list, readProductOnCate, create, remove, update } from "../controllers/category";
import { userById } from "../controllers/user";
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";


const router = Router();


router.get('/category', list);
router.get('/category/:id', readProductOnCate);
router.post('/category/:userId', requireSignin, isAuth, isAdmin, create);
router.delete('/category/:userId/:id', requireSignin, isAuth, isAdmin, remove);
router.patch("/category/:userId/:id", requireSignin, isAuth, isAdmin, update);

router.param("userId", userById);


export default router