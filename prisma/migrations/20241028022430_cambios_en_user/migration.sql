/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[emailUser]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `emailUser` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameUser` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordUser` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `Event_organizerId_fkey`;

-- DropForeignKey
ALTER TABLE `registration` DROP FOREIGN KEY `Registration_userId_fkey`;

-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `email`,
    DROP COLUMN `id`,
    DROP COLUMN `name`,
    DROP COLUMN `password`,
    DROP COLUMN `role`,
    ADD COLUMN `emailUser` VARCHAR(191) NOT NULL,
    ADD COLUMN `nameUser` VARCHAR(191) NOT NULL,
    ADD COLUMN `passwordUser` VARCHAR(191) NOT NULL,
    ADD COLUMN `roleUser` ENUM('ADMIN', 'ORGANIZER', 'PARTICIPANT') NOT NULL DEFAULT 'PARTICIPANT',
    ADD COLUMN `userID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`userID`);

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `user`(`emailUser`);

-- AddForeignKey
ALTER TABLE `event` ADD CONSTRAINT `Event_organizerId_fkey` FOREIGN KEY (`organizerId`) REFERENCES `user`(`userID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `registration` ADD CONSTRAINT `Registration_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`userID`) ON DELETE RESTRICT ON UPDATE CASCADE;
