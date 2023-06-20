/*
  Warnings:

  - You are about to drop the `genres` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `genres` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "genres";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "synopsis" TEXT NOT NULL,
    "genres" TEXT NOT NULL,
    "wishListId" TEXT,
    CONSTRAINT "books_wishListId_fkey" FOREIGN KEY ("wishListId") REFERENCES "wishlists" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_books" ("author", "id", "image", "rating", "synopsis", "title", "wishListId") SELECT "author", "id", "image", "rating", "synopsis", "title", "wishListId" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
