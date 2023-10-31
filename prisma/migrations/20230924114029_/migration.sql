/*
  Warnings:

  - You are about to drop the column `trainingId` on the `Group` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[groupId]` on the table `Training` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_trainingId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_trainingId_fkey";

-- DropForeignKey
ALTER TABLE "Round" DROP CONSTRAINT "Round_trainingId_fkey";

-- DropIndex
DROP INDEX "Group_trainingId_key";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Group" DROP COLUMN "trainingId";

-- AlterTable
ALTER TABLE "Training" ADD COLUMN     "groupId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Training_groupId_key" ON "Training"("groupId");

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Training"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Round" ADD CONSTRAINT "Round_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Training"("id") ON DELETE CASCADE ON UPDATE CASCADE;
