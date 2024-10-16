-- CreateTable
CREATE TABLE "Problems" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "testCases" TEXT NOT NULL,

    CONSTRAINT "Problems_pkey" PRIMARY KEY ("id")
);
