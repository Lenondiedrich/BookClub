import { prisma } from "../lib/prisma";

export const bookService = {
  findById: async (bookId: string) => {
    try {
      const book = await prisma.book.findUnique({
        where: {
          id: bookId,
        },
      });

      if (!book) {
        throw new Error("Livro não encontrado." );
      } else {
        return book;
      }

    } catch (error) {
      console.error(error);
    }
  },
  deleteById: async (bookId: string) => {
    const book = await prisma.book.delete({
      where: {
        id: bookId,
      },
    });

    return book;
  }
};
