/*
  Warnings:

  - You are about to drop the column `JavaScriptTemplate` on the `Problem` table. All the data in the column will be lost.
  - You are about to drop the column `cTemplate` on the `Problem` table. All the data in the column will be lost.
  - You are about to drop the column `javaTemplate` on the `Problem` table. All the data in the column will be lost.
  - You are about to drop the column `pythonTemplate` on the `Problem` table. All the data in the column will be lost.
*/

-- Rename the primary key constraint
ALTER TABLE "Problem" RENAME CONSTRAINT "Problems_pkey" TO "Problem_pkey";

-- Drop unnecessary columns
ALTER TABLE "Problem" DROP COLUMN "JavaScriptTemplate";
ALTER TABLE "Problem" DROP COLUMN "cTemplate";
ALTER TABLE "Problem" DROP COLUMN "javaTemplate";
ALTER TABLE "Problem" DROP COLUMN "pythonTemplate";

-- Alter the 'createdAt' column type in 'Submission' table
ALTER TABLE "Submission" ALTER COLUMN "createdAt" SET DATA TYPE DATE;
