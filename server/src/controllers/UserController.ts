import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const userController = {
  updateProfile: async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { email, name, avatarUrl } = req.body;
  
    try {
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { email, name, avatarUrl },
      });
  
      return res.json(updatedUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar o usuário.' });
    }
  }
}