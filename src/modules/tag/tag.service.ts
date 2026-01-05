import prisma from '../../db';
import { Prisma, Tag } from '@prisma/client';

export const getAllTags = async () => {
  return await prisma.tag.findMany()
}

export const createTag = async (data: Prisma.TagCreateInput) => {
  return await prisma.tag.create({ data })
}

export const editTag = async (id: number, data: Prisma.TagUpdateInput) => {
  return await prisma.tag.update({
    where: { id },
    data
  })
}

export const deleteTag = async (id: number) => {
  return await prisma.user.delete({
    where: { id }
  })
}