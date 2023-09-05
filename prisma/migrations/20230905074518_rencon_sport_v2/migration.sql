/*
  Warnings:

  - A unique constraint covering the columns `[user_id,exercice_id]` on the table `ExerciceLike` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[liker_id,liked_id]` on the table `UserLike` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ChatMessage" ALTER COLUMN "sender_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ExerciceLike" ALTER COLUMN "user_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Training" ALTER COLUMN "user_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "TrainingPartner" ALTER COLUMN "user_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "UserChatGroup" ALTER COLUMN "user_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "UserLike" ALTER COLUMN "liker_id" SET DATA TYPE TEXT,
ALTER COLUMN "liked_id" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ExerciceLike_user_id_exercice_id_key" ON "ExerciceLike"("user_id", "exercice_id");

-- CreateIndex
CREATE UNIQUE INDEX "UserLike_liker_id_liked_id_key" ON "UserLike"("liker_id", "liked_id");

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciceTraining" ADD CONSTRAINT "ExerciceTraining_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciceTraining" ADD CONSTRAINT "ExerciceTraining_exercice_id_fkey" FOREIGN KEY ("exercice_id") REFERENCES "Exercice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingPartner" ADD CONSTRAINT "TrainingPartner_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingPartner" ADD CONSTRAINT "TrainingPartner_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciceLike" ADD CONSTRAINT "ExerciceLike_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciceLike" ADD CONSTRAINT "ExerciceLike_exercice_id_fkey" FOREIGN KEY ("exercice_id") REFERENCES "Exercice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLike" ADD CONSTRAINT "UserLike_liker_id_fkey" FOREIGN KEY ("liker_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLike" ADD CONSTRAINT "UserLike_liked_id_fkey" FOREIGN KEY ("liked_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatGroup" ADD CONSTRAINT "ChatGroup_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChatGroup" ADD CONSTRAINT "UserChatGroup_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChatGroup" ADD CONSTRAINT "UserChatGroup_chat_group_id_fkey" FOREIGN KEY ("chat_group_id") REFERENCES "ChatGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
