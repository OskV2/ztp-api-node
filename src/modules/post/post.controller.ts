import { Request, Response } from 'express';
import * as postService from './post.service';

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const includeTags = req.query.tags === 'true'; // default false
    const includeAuthor = req.query.author === 'true'; // default false
    
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;

    const skip = (page - 1) * limit;

    const user = await postService.getAllPosts({
      includeTags, 
      includeAuthor,
      skip,
      take: limit
    });
    
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: `Something went wrong. Could not get all posts.` });
  }
};

export const createPost = async (req: Request, res: Response) => {
  console.log(req.body)
  try {
    const data = req.body;
    const user = await postService.createPost(data);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: `Something went wrong. Could not create post` });
  }
};

export const editPost = async (req: Request, res: Response) => {
  const id = req.params.userId;

  try {
    const data = req.body;
    const user = await postService.editPost(+id, data);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({
        message: `Something went wrong. Could not edit user post id ${id}`,
      });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  const id = req.params.userId;

  try {
    const user = await postService.deletePost(+id);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({
        message: `Something went wrong. Could not delete post with id ${id}`,
      });
  }
};
