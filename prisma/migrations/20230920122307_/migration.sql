/*
  Warnings:

  - Added the required column `sportId` to the `Exercice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercice" ADD COLUMN     "sportId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Exercice" ADD CONSTRAINT "Exercice_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
