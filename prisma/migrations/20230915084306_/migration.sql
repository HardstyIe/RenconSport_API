/*
  Warnings:

  - Added the required column `nb_player` to the `Training` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Training" ADD COLUMN     "mode" VARCHAR(100),
ADD COLUMN     "nb_player" INTEGER NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'A venir';
