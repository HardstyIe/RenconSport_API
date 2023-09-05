/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `birthday` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "name",
DROP COLUMN "updatedAt",
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Exercice" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "isLiked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Exercice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" SERIAL NOT NULL,
    "chat_group_id" INTEGER NOT NULL,
    "sender_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Training" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "start_at" TIMESTAMP(3) NOT NULL,
    "finish_at" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dynamic_latitude" DOUBLE PRECISION NOT NULL,
    "dynamic_longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciceTraining" (
    "id" SERIAL NOT NULL,
    "training_id" INTEGER NOT NULL,
    "exercice_id" INTEGER NOT NULL,
    "sets" INTEGER NOT NULL,
    "repetitions" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ExerciceTraining_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingPartner" (
    "id" SERIAL NOT NULL,
    "training_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "TrainingPartner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciceLike" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "exercice_id" INTEGER NOT NULL,

    CONSTRAINT "ExerciceLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLike" (
    "id" SERIAL NOT NULL,
    "liker_id" INTEGER NOT NULL,
    "liked_id" INTEGER NOT NULL,

    CONSTRAINT "UserLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatGroup" (
    "id" SERIAL NOT NULL,
    "training_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ChatGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserChatGroup" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "chat_group_id" INTEGER NOT NULL,

    CONSTRAINT "UserChatGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);
