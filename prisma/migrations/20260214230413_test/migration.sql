/*
  Warnings:

  - You are about to drop the column `description` on the `Produit` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Produit" ("createdAt", "id", "name", "price", "stock") SELECT "createdAt", "id", "name", "price", "stock" FROM "Produit";
DROP TABLE "Produit";
ALTER TABLE "new_Produit" RENAME TO "Produit";
CREATE UNIQUE INDEX "Produit_name_key" ON "Produit"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
