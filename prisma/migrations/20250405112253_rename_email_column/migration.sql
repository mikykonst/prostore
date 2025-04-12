/*
  Warnings:

  - You are about to drop the column `user_email_idx` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "users_user_email_idx_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "user_email_idx",
ADD COLUMN     "email" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "user_email_idx" ON "users"("email");
