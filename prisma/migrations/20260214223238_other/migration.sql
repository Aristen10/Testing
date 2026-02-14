/*
  Warnings:

  - You are about to drop the column `categorie` on the `Produit` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT 'Produit de consommation',
    "price" REAL NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Produit" ("createdAt", "description", "id", "name", "price", "stock") SELECT "createdAt", coalesce("description", 'Produit de consommation') AS "description", "id", "name", "price", "stock" FROM "Produit";
DROP TABLE "Produit";
ALTER TABLE "new_Produit" RENAME TO "Produit";
CREATE UNIQUE INDEX "Produit_name_key" ON "Produit"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
