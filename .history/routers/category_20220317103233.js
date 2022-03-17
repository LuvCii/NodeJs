import { Router } from "express";
import { create, read } from "../controllers/categories";
const router = Router();

router.post("/categories", create);
router.get("/category:id", read);
export default router;