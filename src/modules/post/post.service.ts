import prisma from '../../db';
import { Prisma, User } from '@prisma/client';

export const getAllPosts = async () => {
  return await prisma.post.findMany();
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