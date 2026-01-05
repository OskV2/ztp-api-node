import { Request, Response } from 'express';
import * as tagService from './tag.service';

export const getAllTags = async (req: Request, res: Response) => {
  try {
    const tags = await tagService.getAllTags()
    res.status(200).json(tags)
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: `Something went wrong. Could not get all users.` });
  }
}

export const createTag = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const tag = await tagService.createTag(data)
    res.status(200).json(tag)
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: `Something went wrong. Could not create new tag.` });
  }
}

export const editTag = async (req: Request, res: Response) => {
  const id = req.params.tagId;

  try {
    const data = req.body;
    const tag = await tagService.editTag(+id, data)
    res.status(200).json(tag)
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: `Something went wrong. Could not edit existing tag.` });
  }
}

export const deleteTag = async (req: Request, res: Response) => {
  const id = req.params.tagId;

  try {
    const tag = await tagService.deleteTag(+id)
    res.status(200).json(tag)
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: `Something went wrong. Could not delete tag.` });
  }
}