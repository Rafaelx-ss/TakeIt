/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `emailUser` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `nombreUser` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `passwordUser` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `roleUser` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `userID` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `Event_organizerId_fkey`;

-- DropForeignKey
ALTER TABLE `registration` DROP FOREIGN KEY `Registration_userId_fkey`;

-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `emailUser`,
    DROP COLUMN `nombreUser`,
    DROP COLUMN `passwordUser`,
    DROP COLUMN `roleUser`,
    DROP COLUMN `userID`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `role` ENUM('ADMIN', 'ORGANIZER', 'PARTICIPANT') NOT NULL DEFAULT 'PARTICIPANT',
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_organizerId_fkey` FOREIGN KEY (`organizerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Registration` ADD CONSTRAINT `Registration_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
