import { Router } from "express";
import { create, read, list } from "../controllers/category";
const router = Router();
// import { checkAuth } from '../middlewares/checkAuth'

router.post("/category", create);
// router.get('/category', checkAuth, list);
router.get("/category:id", read);
export default router;