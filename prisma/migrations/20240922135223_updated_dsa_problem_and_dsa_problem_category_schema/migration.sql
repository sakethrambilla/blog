/*
  Warnings:

  - You are about to drop the `DSAProblem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DSAProblemCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DSAProblemToDSAProblemCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DSAProblemToDSAProblemCategory" DROP CONSTRAINT "_DSAProblemToDSAProblemCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_DSAProblemToDSAProblemCategory" DROP CONSTRAINT "_DSAProblemToDSAProblemCategory_B_fkey";

-- DropTable
DROP TABLE "DSAProblem";

-- DropTable
DROP TABLE "DSAProblemCategory";

-- DropTable
DROP TABLE "_DSAProblemToDSAProblemCategory";

-- CreateTable
CREATE TABLE "DsaProblem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "difficulty_level" TEXT NOT NULL,
    "save" BOOLEAN NOT NULL,
    "publish" BOOLEAN NOT NULL,

    CONSTRAINT "DsaProblem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DsaProblemCategory" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "category_slug" TEXT NOT NULL,

    CONSTRAINT "DsaProblemCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DsaProblemToDsaProblemCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DsaProblem_slug_key" ON "DsaProblem"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "DsaProblemCategory_category_slug_key" ON "DsaProblemCategory"("category_slug");

-- CreateIndex
CREATE UNIQUE INDEX "_DsaProblemToDsaProblemCategory_AB_unique" ON "_DsaProblemToDsaProblemCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_DsaProblemToDsaProblemCategory_B_index" ON "_DsaProblemToDsaProblemCategory"("B");

-- AddForeignKey
ALTER TABLE "_DsaProblemToDsaProblemCategory" ADD CONSTRAINT "_DsaProblemToDsaProblemCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "DsaProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DsaProblemToDsaProblemCategory" ADD CONSTRAINT "_DsaProblemToDsaProblemCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "DsaProblemCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
