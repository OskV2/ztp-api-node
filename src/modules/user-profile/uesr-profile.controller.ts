import { Request, Response } from 'express';
import * as profileService from './user-profile.service';

export const getProfile = async (req: Request, res: Response) => {
  const id = req.params.profileId;

    try {
      const profile = await profileService.getProfile(+id);
      res.status(200).json(profile);
    } catch (err) {
      console.error(err);
      res
        .status(400)
        .json({ message: `Something went wrong. Could not get users profile` });
    }
}

export const editProfile = async (req: Request, res: Response) => {
    const id = req.params.profileId;

  try {
    const data = req.body;
    const profile = await profileService.editProfile(+id, data);
    res.status(201).json(profile);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: `Something went wrong. Could not update users profile` });
  }
}