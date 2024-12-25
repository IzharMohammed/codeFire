/*
  Warnings:

  - You are about to drop the column `code` on the `Template` table. All the data in the column will be lost.
  - Added the required column `starterCode` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stdInRetrievalCode` to the `Template` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Template" DROP COLUMN "code",
ADD COLUMN     "starterCode" TEXT NOT NULL,
ADD COLUMN     "stdInRetrievalCode" TEXT NOT NULL;
