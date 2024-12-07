/*
  Warnings:

  - You are about to drop the `Problems` table. If the table is not empty, all the data it contains will be lost.

  Modifications have been made to retain the `Problems` table and apply schema changes without data loss.
*/

-- CreateEnum
CREATE TYPE "submissionStatus" AS ENUM ('PENDING', 'ACCEPTED', 'ERROR');

-- Rename Existing Table
-- If the table is already named "Problem," skip this step.
ALTER TABLE "Problems" RENAME TO "Problem";

-- Add New Columns for Templates
ALTER TABLE "Problem" ADD COLUMN "cTemplate" TEXT;
ALTER TABLE "Problem" ADD COLUMN "javaTemplate" TEXT;
ALTER TABLE "Problem" ADD COLUMN "JavaScriptTemplate" TEXT;
ALTER TABLE "Problem" ADD COLUMN "pythonTemplate" TEXT;

-- CreateTable for Submissions
CREATE TABLE "Submission" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "problemId" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "status" "submissionStatus" NOT NULL DEFAULT 'PENDING',
    "result" JSONB,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable for Templates
CREATE TABLE "Template" (
    "id" SERIAL NOT NULL,
    "language" TEXT NOT NULL,
    "languageId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "problemId" INTEGER NOT NULL,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- Update Foreign Key for Testcases
ALTER TABLE "Testcases" DROP CONSTRAINT "Testcases_problemId_fkey";
ALTER TABLE "Testcases" ADD CONSTRAINT "Testcases_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Add Foreign Keys for Submissions
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Add Foreign Key for Templates
ALTER TABLE "Template" ADD CONSTRAINT "Template_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
