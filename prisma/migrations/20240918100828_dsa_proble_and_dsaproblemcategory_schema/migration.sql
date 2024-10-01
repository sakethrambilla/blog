-- CreateTable
CREATE TABLE "DSAProblem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "DSAProblem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DSAProblemCategory" (
    "id" TEXT NOT NULL,

    CONSTRAINT "DSAProblemCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DSAProblemToDSAProblemCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DSAProblem_slug_key" ON "DSAProblem"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_DSAProblemToDSAProblemCategory_AB_unique" ON "_DSAProblemToDSAProblemCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_DSAProblemToDSAProblemCategory_B_index" ON "_DSAProblemToDSAProblemCategory"("B");

-- AddForeignKey
ALTER TABLE "_DSAProblemToDSAProblemCategory" ADD CONSTRAINT "_DSAProblemToDSAProblemCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "DSAProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DSAProblemToDSAProblemCategory" ADD CONSTRAINT "_DSAProblemToDSAProblemCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "DSAProblemCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
