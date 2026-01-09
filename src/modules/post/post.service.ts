import prisma from '../../db';
import { Prisma, User } from '@prisma/client';

type GetPostsOptions = {
  includeTags?: boolean;
  includeAuthor?: boolean;
  skip?: number;
  take?: number;
};

export const getAllPosts = async (options: GetPostsOptions = {}) => {
  return await prisma.post.findMany({
    include: {
      tags: options.includeTags,
      author: options.includeAuthor
    },
    skip: options.skip,
    take: options.take
  });
}

export const createPost = async (data: Prisma.PostCreateInput) => {
  return await prisma.post.create({ data })
}

export const editPost = async (id: number, data: Prisma.PostUpdateInput) => {
  return await prisma.post.update({
    where: { id },
    data
  })
}

export const deletePost = async (id: number) => {
  return await prisma.post.delete({
    where: { id }
  })
}