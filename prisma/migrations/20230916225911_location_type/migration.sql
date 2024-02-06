/*
  Warnings:

  - Added the required column `type` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('INDOOR', 'OUTDOOR');

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "type",
ADD COLUMN     "type" "LocationType" NOT NULL;
