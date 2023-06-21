import { Request, Response } from "express";
import { bookService } from "../services/bookService";
import { prisma } from "../lib/prisma";

export const bookController = {
  rating: async (req: Request, res: Response) => {
    const bookId = String(req.params.id);
    const { rating, comment, userId } = req.body;

    // Encontrar o livro pelo ID
    const book = await bookService.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: "Livro não encontrado." });
    }

    try {
      // Fazer a avaliação
      const createdReview = await prisma.review.create({
        data: {
          rating: Number(rating),
          comment,
          user_id: userId,
          book_id: bookId,
        },
      });

      // Atualizar o array de avaliações
      await prisma.book.update({
        where: { id: bookId },
        data: { reviews: { connect: { id: createdReview.id } } },
      });

      // Atualizar a nota
      bookService.updateRating(bookId)

    } catch (error) {
      console.error(error);
    }

    return res
      .status(201)
      .json({ message: "Avaliação registrada com sucesso." });
  },
  getBook: async (req: Request, res: Response) => {
    const bookId = String(req.params.id);

    try {
      const book = await bookService.findById(bookId);

      if (!book) {
        return res.status(404).json({ message: "Livro não encontrado." });
      } else {
        return res.status(200).json(book)
      }
    } catch (error) {
      console.error(error);
    }
  },
  deleteBook: async (req: Request, res: Response) => {
    const bookId = String(req.params.id);

    try {
      const deletedBook = bookService.deleteById(bookId);

      if (!deletedBook) {
        return res.status(404).json({ message: "Livro não encontrado." });
      }

      return res.status(200).json({ message: "Livro deletado com sucesso." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao deletar o livro." });
    }
  },
  getAllBooks: async (req: Request,res: Response) => {
    try {
      const books = await prisma.book.findMany();
      return res.status(200).json(books);
    } catch (error) {
      console.error('Erro ao obter os livros:', error);
      res.status(500).json({ error: 'Erro ao obter os livros' });
    }
  },
  addToWishList:async (req: Request, res: Response) => {
    const { userId, bookId } = req.params;

  try {
    // Verificar se o usuário existe
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    const wishlistId = user.wishListId;

    // Verificar se o livro já está na wishlist do usuário
    if(wishlistId) {

      const existingBook = await prisma.wishList.findFirst({
        where: { id: wishlistId, books: { some: { id: bookId } } },
      });

      if (existingBook) {
        return res.status(400).json({ error: 'Livro já está na wishlist.' });
      }

      // Adicionar o livro à wishlist do usuário
      const updatedWishlist = await prisma.wishList.update({
        where: { id: wishlistId },
        data: { books: { connect: { id: bookId } } },
        include: { books: true },
      });
  
      return res.json(updatedWishlist);
    }
    
     
     
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao adicionar o livro à wishlist.' });
  }
}}
