import { Router } from "express";
import * as tagController from "./tag.controller";

const router = Router();

router.get('/', tagController.getAllTags)

router.post('/', tagController.createTag)

router.patch('/:tagId', tagController.editTag)

router.delete('/:tagId', tagController.deleteTag)

export default router;