/*
  Warnings:

  - The `defense_ignore` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `abnormal_status_resist` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `all_attribute_resist` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `damage_reduction` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `invincibility` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "defense_ignore",
ADD COLUMN     "defense_ignore" INTEGER,
DROP COLUMN "abnormal_status_resist",
ADD COLUMN     "abnormal_status_resist" INTEGER,
DROP COLUMN "all_attribute_resist",
ADD COLUMN     "all_attribute_resist" INTEGER,
DROP COLUMN "damage_reduction",
ADD COLUMN     "damage_reduction" INTEGER,
DROP COLUMN "invincibility",
ADD COLUMN     "invincibility" DECIMAL(65,30);
