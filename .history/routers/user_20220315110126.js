import { Router } from "express";
import { list, create, read, remove, update } from '../controllers/users';
// import { route } from "express/lib/application";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();


// resful API
router.get('/users', checkAuth, list);
router.get('/user/:id', checkAuth, read);
router.post('/users', checkAuth, create);
router.delete('/user/:id', checkAuth, remove);
router.patch("/user/:id", checkAuth, update)

export default router