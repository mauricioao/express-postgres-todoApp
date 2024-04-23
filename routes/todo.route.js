import { todoController } from "../controllers/todo.controller.js";
import { Router } from "express";

const router = Router();

router.get("/", todoController.getAll);
router.post("/", todoController.create);

export default router;