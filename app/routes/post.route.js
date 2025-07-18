import { Router } from "express";
import * as postController from "../controllers/post.controller.js";

const router = Router();

router.get("/", postController.getAll);
router.get("/:id", postController.getPost);
router.post("/", postController.create);
router.put("/:id", postController.update);
router.delete("/:id", postController.remove);

export default router;
