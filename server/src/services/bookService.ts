import { prisma } from "../lib/prisma";

export const bookService = {
  findById: async (bookId: string) => {
    try {
      const book = await prisma.book.findUnique({
        where: {
          id: bookId,
        },
        include: {
          reviews: true,
        }
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
  },
  updateRating: async (bookId: string) => {
    const book = await bookService.findById(bookId);

    if(book?.reviews) {
      const notes = book.reviews.map(review => review.rating)

      function calculateNote() {
        const sum = notes.reduce((total, rating) => total + rating, 0);
        return sum / notes.length;
      }

      await prisma.book.update({
        where: {
          id: bookId
        },
        data: {
          rating: calculateNote()
        }
      })
    }
  }
};
