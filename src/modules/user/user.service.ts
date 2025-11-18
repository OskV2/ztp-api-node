import prisma from '../../db';
import { Prisma, User } from '@prisma/client';

export const getAllUsers = async () => {
  return await prisma.user.findMany();
}

export const createUser = async (data: Prisma.UserCreateInput) => {
  return await prisma.user.create({ data })
}

export const editUser = async (id: number, data: Prisma.UserUpdateInput) => {
  return await prisma.user.update({
    where: { id },
    data
  })
}

export const deleteUser = async (id: number) => {
  return await prisma.user.delete({
    where: { id }
  })
}