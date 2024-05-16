/*
  Warnings:

  - The `main_stat` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `link_priority` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `union_priority` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "main_stat",
ADD COLUMN     "main_stat" TEXT[],
DROP COLUMN "link_priority",
ADD COLUMN     "link_priority" INTEGER,
DROP COLUMN "union_priority",
ADD COLUMN     "union_priority" INTEGER;
