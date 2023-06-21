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
  },
   indicateBook: async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;

      const user = await prisma.user.findUnique({
        where: {
          id: userId
        }
      })
  
      if(user?.wishListId) {
        // Busca a wishlist do usuário
      const wishlist = await prisma.wishList.findUnique({
        where: { id: user.wishListId },
        include: { books: true },
      });
  
      if (!wishlist) {
        return res.status(404).json({ error: 'Wishlist not found' });
      }
  
      const wishlistBookIds = wishlist.books.map((book) => book.id)
      const genres = wishlist.books.map((book) => book.genre)
  
      // Busca os livros do mesmo gênero da wishlist do usuário
      const books = await prisma.book.findMany({
        where: {
          genre: {
            in: genres
          },
          id: {
            notIn: wishlistBookIds, // Exclui os livros que já estão na wishlist
          },
        },
      });
      res.json({ books });
      }
  
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  indicateBookByBody: async (req: Request, res: Response) => {

    try {
      const userId = req.params.id;
      const bookIds = req.query.bookIds as string[];

      const user = await prisma.user.findUnique({
        where: {
          id: userId
        }
      })

      if(user?.wishListId) {
        // Busca a wishlist do usuário
       await prisma.wishList.update({
        where: { id: user.wishListId },
        include: { books: true },
        data: {
          books: {
            connect: bookIds?.map((bookId: string) => ({ id: bookId })),
          }
        }
      });
    }



      // Encontrar os livros enviados no body
      const books = await prisma.book.findMany({
        where: {
          id: {
            in: bookIds,
          },
        },
      });

    // Obtem os gêneros dos livros encontrados
    const genres = books.map((book) => book.genre);
  
    
    const suggestedBooks = await prisma.book.findMany({
      where: {
        genre: {
          in: genres
        },
        id: {
          notIn: bookIds, // Exclui os livros que já estão na wishlist
        },
      },
    });
  
    res.json({ suggestedBooks, user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  me: async (req: Request, res: Response) => {
    const userId = req.params.id
  
    try {
      // Consultar o banco de dados para obter os dados do usuário logado
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
  
      // Verificar se o usuário existe
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
  
      // Retornar os dados do usuário
      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao obter os dados do usuário' });
    }
  }
}