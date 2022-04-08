import { Router } from "express";
import { list, userById, remove } from "../controllers/user";
import { checkAuth, isAuth, isAdmin, requireSignin } from "../middlewares/checkAuth";


const router = Router();



// resful api
router.get('/user', checkAuth, list);
router.delete('/user/:id', requireSignin, isAuth, isAdmin, remove);

router.param("userId", userById);


export default router