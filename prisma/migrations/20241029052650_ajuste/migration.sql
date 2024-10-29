/*
  Warnings:

  - You are about to drop the column `activoCategoria` on the `patrocinadores` table. All the data in the column will be lost.
  - You are about to drop the column `estadoCategoria` on the `patrocinadores` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `patrocinadores` DROP COLUMN `activoCategoria`,
    DROP COLUMN `estadoCategoria`,
    ADD COLUMN `activoPatrocinador` BIT(1) NOT NULL DEFAULT (b'1'),
    ADD COLUMN `estadoPatrocinador` BIT(1) NOT NULL DEFAULT (b'1');
