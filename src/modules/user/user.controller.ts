import { Request, Response } from 'express';
import * as userService from './user.service';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const includeProfile = req.query.profile === 'true'  //  Default false

    const user = await userService.getAllUsers({ includeProfile });
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: `Something went wrong. Could not get all users.` });
  }
};

export const createUser = async (req: Request, res: Response) => {
  console.log(req.body)
  try {
    const data = req.body;
    const user = await userService.createUser(data);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: `Something went wrong. Could not create user` });
  }
};

export const editUser = async (req: Request, res: Response) => {
  const id = req.params.userId;

  try {
    const data = req.body;
    const user = await userService.editUser(+id, data);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({
        message: `Something went wrong. Could not edit user with id ${id}`,
      });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.userId;

  try {
    const user = await userService.deleteUser(+id);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({
        message: `Something went wrong. Could not delete user with id ${id}`,
      });
  }
};
