import { prisma } from "../lib/prisma";
import bcrypt from 'bcrypt'

interface createUserPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const userService = {
  create: async ({
    name,
    email,
    password,
    confirmPassword,
  }: createUserPayload) => {
    if(password === confirmPassword) {
      const hashPassword = bcrypt.hashSync(password, 10)
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashPassword
        },
      });
      return user;
    } else {
      throw new Error('As senhas não são iguais.')
    }
    
  },
  findByEmail: async (email: string) => {
    const user = await prisma.user.findFirst({
      where: {
        email
      },
    });

    return user;
  },
};
