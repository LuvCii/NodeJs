import { Router } from "express";
import { list, create, read, remove, update } from '../controllers/posts';
// import { route } from "express/lib/application";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();


// resful API
router.get('/posts', checkAuth, list);
router.get('/post/:id', checkAuth, read);
router.post('/posts', checkAuth, create);
router.delete('/post/:id', checkAuth, remove);
router.patch("/post/:id", checkAuth, update)

export default router