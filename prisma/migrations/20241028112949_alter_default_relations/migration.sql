/*
  Warnings:

  - You are about to drop the column `payableId` on the `Assignor` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Assignor" DROP CONSTRAINT "Assignor_payableId_fkey";

-- AlterTable
ALTER TABLE "Assignor" DROP COLUMN "payableId";

-- AlterTable
ALTER TABLE "Payable" ADD COLUMN     "assignorId" TEXT;

-- AddForeignKey
ALTER TABLE "Payable" ADD CONSTRAINT "Payable_assignorId_fkey" FOREIGN KEY ("assignorId") REFERENCES "Assignor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
