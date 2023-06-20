/*
  Warnings:

  - You are about to drop the column `user_id` on the `wishlists` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "name" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "wishListId" TEXT,
    CONSTRAINT "users_wishListId_fkey" FOREIGN KEY ("wishListId") REFERENCES "wishlists" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_users" ("avatarUrl", "createdAt", "email", "id", "name", "password") SELECT "avatarUrl", "createdAt", "email", "id", "name", "password" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE TABLE "new_wishlists" (
    "id" TEXT NOT NULL PRIMARY KEY
);
INSERT INTO "new_wishlists" ("id") SELECT "id" FROM "wishlists";
DROP TABLE "wishlists";
ALTER TABLE "new_wishlists" RENAME TO "wishlists";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
