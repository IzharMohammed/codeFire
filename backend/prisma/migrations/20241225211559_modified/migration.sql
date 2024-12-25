/*
  Warnings:

  - The values [PENDING,ERROR] on the enum `submissionStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `language` on the `Submission` table. All the data in the column will be lost.
  - Added the required column `email` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `languageId` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memory` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Submission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "submissionStatus_new" AS ENUM ('ACCEPTED', 'WRONG_ANSWER');
ALTER TABLE "Submission" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Submission" ALTER COLUMN "status" TYPE "submissionStatus_new" USING ("status"::text::"submissionStatus_new");
ALTER TYPE "submissionStatus" RENAME TO "submissionStatus_old";
ALTER TYPE "submissionStatus_new" RENAME TO "submissionStatus";
DROP TYPE "submissionStatus_old";
ALTER TABLE "Submission" ALTER COLUMN "status" SET DEFAULT 'WRONG_ANSWER';
COMMIT;

-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "language",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "languageId" INTEGER NOT NULL,
ADD COLUMN     "memory" INTEGER NOT NULL,
ADD COLUMN     "time" INTEGER NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'WRONG_ANSWER';
