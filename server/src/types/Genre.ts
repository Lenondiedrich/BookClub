import { Book } from "./Book";

export type Genre = {
  id: string;
  name: string;
  Book?: Book;
  bookId?: string;
};
