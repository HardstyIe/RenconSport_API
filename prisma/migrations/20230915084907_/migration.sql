/*
  Warnings:

  - You are about to drop the column `biography` on the `Training` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Training" DROP COLUMN "biography";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "biography" TEXT NOT NULL DEFAULT 'non définie';
