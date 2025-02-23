/*
  Warnings:

  - You are about to drop the `ClubTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClubTag" DROP CONSTRAINT "ClubTag_clubId_fkey";

-- DropForeignKey
ALTER TABLE "ClubTag" DROP CONSTRAINT "ClubTag_tagId_fkey";

-- AlterTable
ALTER TABLE "Club" ADD COLUMN     "tags" TEXT[];

-- DropTable
DROP TABLE "ClubTag";

-- DropTable
DROP TABLE "Tag";
