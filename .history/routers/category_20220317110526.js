import { Router } from "express";
import { create, read } from "../controllers/category";
const router = Router();
import { checkAuth } from '../middlewares/checkAuth'

router.post("/category", checkAuth, create);
// router.get('/category', checkAuth, list);
router.get("/category:id", checkAuth, read);
export default router;