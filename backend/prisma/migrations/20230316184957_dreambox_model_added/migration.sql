-- CreateTable
CREATE TABLE "DreamBox" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "current" DOUBLE PRECISION NOT NULL,
    "goal" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "DreamBox_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DreamBox" ADD CONSTRAINT "DreamBox_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
