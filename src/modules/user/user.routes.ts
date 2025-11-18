import { Router } from "express";
import * as userController from "./user.controller";

const router = Router();

router.get('/', userController.getAllUsers)

router.post('/', userController.createUser)

router.patch('/:userId', userController.editUser)

router.delete('/:userId', userController.deleteUser)

export default router;