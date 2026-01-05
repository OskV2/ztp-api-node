import prisma from '../../db';
import { Prisma, User } from '@prisma/client';

export const getProfile = async (userId: number) => {
  return await prisma.userProfile.findUnique({ 
    where: { userId } 
  })
}

export const editProfile = async (userId: number, data: Prisma.UserProfileUpdateInput) => {
  return await prisma.userProfile.update({ 
    where: { userId },
    data
  })
}