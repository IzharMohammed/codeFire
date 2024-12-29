/*
  Warnings:

  - Added the required column `testCaseCount` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalTestCases` to the `Submission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Submission" ADD COLUMN     "testCaseCount" INTEGER NOT NULL,
ADD COLUMN     "totalTestCases" INTEGER NOT NULL,
ALTER COLUMN "createdAt" DROP DEFAULT,
ALTER COLUMN "createdAt" SET DATA TYPE TEXT;
