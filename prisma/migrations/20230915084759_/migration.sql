/*
  Warnings:

  - Added the required column `biography` to the `Training` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Training" ADD COLUMN     "biography" TEXT NOT NULL;
