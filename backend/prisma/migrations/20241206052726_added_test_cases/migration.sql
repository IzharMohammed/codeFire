/*
  Warnings:

  - You are about to drop the column `testCases` on the `Problems` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Problems" DROP COLUMN "testCases";

-- CreateTable
CREATE TABLE "Testcases" (
    "id" SERIAL NOT NULL,
    "input" TEXT NOT NULL,
    "output" TEXT NOT NULL,
    "problemId" INTEGER NOT NULL,

    CONSTRAINT "Testcases_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Testcases_problemId_key" ON "Testcases"("problemId");

-- AddForeignKey
ALTER TABLE "Testcases" ADD CONSTRAINT "Testcases_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
