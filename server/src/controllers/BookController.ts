import { Request, Response } from "express";
import { bookService } from "../services/bookService";

export const bookController = {
  rating: async (req: Request, res: Response) => {
    const bookId = String(req.params.id);
    const { rating, comment, userId } = req.body;
  
    // Encontrar o livro pelo ID
    const book = await bookService.findById(bookId)
  
    if (!book) {
      return res.status(404).json({ message: 'Livro não encontrado.' });
    }
  
    // Fazer a avaliação
    const bookReview = {
      rating,
      comment,
      userId
    };
  
     // Armazenar a avaliação no livro
    // book.reviews.push(bookReview)
  
    return res.status(201).json({ message: 'Avaliação registrada com sucesso.' });
  },
  getBook: async (req: Request, res: Response) => {
     const bookId = String(req.params.id);

     const book = await bookService.findById(bookId)
  
    if (!book) {
      return res.status(404).json({ message: 'Livro não encontrado.' });
    } else {
      return book
    }
  },
  deleteBook: async (req: Request, res: Response) => {
    const bookId = String(req.params.id);
  
    try {
      const deletedBook = bookService.deleteById(bookId)
  
      if (!deletedBook) {
        return res.status(404).json({ message: 'Livro não encontrado.' });
      }
  
      return res.status(200).json({ message: 'Livro deletado com sucesso.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao deletar o livro.' });
    }
  }
}