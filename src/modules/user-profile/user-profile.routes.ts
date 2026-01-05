import { Router } from "express";
import * as userProfileController from "./uesr-profile.controller";

const router = Router();

router.get('/:profileId', userProfileController.getProfile)

router.patch('/:profileId', userProfileController.editProfile)

export default router;