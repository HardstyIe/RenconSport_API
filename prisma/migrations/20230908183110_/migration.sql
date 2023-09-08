/*
  Warnings:

  - Added the required column `type` to the `ChatGroup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ChatGroup" DROP CONSTRAINT "ChatGroup_training_id_fkey";

-- AlterTable
ALTER TABLE "ChatGroup" ADD COLUMN     "type" VARCHAR(20) NOT NULL,
ALTER COLUMN "training_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ChatGroup" ADD CONSTRAINT "ChatGroup_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "Training"("id") ON DELETE SET NULL ON UPDATE CASCADE;
