import prisma from '../../db';
import { Prisma, User } from '@prisma/client';

type GetUsersOptions = {
  includeProfile?: boolean
};

export const getAllUsers = async (options: GetUsersOptions = {}) => {
  return await prisma.user.findMany({
    include: {
      profile: options.includeProfile
    }
  });
}

export const createUser = async (data: Prisma.UserCreateInput) => {
  return await prisma.user.create({ 
    data: {
      username: data.username,
      email: data.email,
      profile: {
        create: {
          bio: "Hello! I'm new user!",
          website: null
        }
      }
    },
    include: {
      profile: true
    }
  })
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