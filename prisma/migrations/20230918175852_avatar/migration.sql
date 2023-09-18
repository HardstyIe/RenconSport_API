/*
  Warnings:

  - You are about to drop the column `profilPicture` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "profilPicture",
ADD COLUMN     "avatar" TEXT;
