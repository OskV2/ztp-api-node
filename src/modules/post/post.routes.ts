import { Router } from "express";
import * as postController from "./post.controller";

const router = Router();

router.get('/', postController.getAllPosts)

router.post('/', postController.createPost)

router.patch('/:postId', postController.editPost)

router.delete('/:postId', postController.deletePost)

export default router;