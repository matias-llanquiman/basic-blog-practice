import { Router } from "express";
import * as postController from "../controllers/post.controller.js";

const router = Router();

router.get("/all", postController.getAll);
router.get("/:id", postController.getPost);
router.post("/", postController.create);

export default router;
