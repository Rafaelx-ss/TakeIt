/*
  Warnings:

  - The `createdAt` column on the `categorias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updatedAt` column on the `categorias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updatedById` column on the `categorias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `telefonoPatrocinador` on the `patrocinadores` table. The data in that column could be lost. The data in that column will be cast from `VarBinary(255)` to `VarChar(255)`.
  - The `createdAt` column on the `subcategorias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updatedAt` column on the `subcategorias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updatedById` column on the `subcategorias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `createdById` on the `categorias` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `createdById` to the `patrocinadores` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `createdById` on the `subcategorias` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `categorias` DROP COLUMN `createdAt`,
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    DROP COLUMN `updatedAt`,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    DROP COLUMN `createdById`,
    ADD COLUMN `createdById` INTEGER NOT NULL,
    DROP COLUMN `updatedById`,
    ADD COLUMN `updatedById` INTEGER NULL,
    MODIFY `activoCategoria` BIT(1) NOT NULL DEFAULT (b'1'),
    MODIFY `estadoCategoria` BIT(1) NOT NULL DEFAULT (b'1');

-- AlterTable
ALTER TABLE `estados` MODIFY `activoEstado` BIT(1) NOT NULL DEFAULT (b'1'),
    MODIFY `estadoEstado` BIT(1) NOT NULL DEFAULT (b'1');

-- AlterTable
ALTER TABLE `paises` MODIFY `activoPais` BIT(1) NOT NULL DEFAULT (b'1'),
    MODIFY `estadoPais` BIT(1) NOT NULL DEFAULT (b'1');

-- AlterTable
ALTER TABLE `patrocinadores` ADD COLUMN `activoCategoria` BIT(1) NOT NULL DEFAULT (b'1'),
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `createdById` INTEGER NOT NULL,
    ADD COLUMN `estadoCategoria` BIT(1) NOT NULL DEFAULT (b'1'),
    ADD COLUMN `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updatedById` INTEGER NULL,
    MODIFY `telefonoPatrocinador` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `subcategorias` DROP COLUMN `createdAt`,
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    DROP COLUMN `updatedAt`,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    DROP COLUMN `createdById`,
    ADD COLUMN `createdById` INTEGER NOT NULL,
    DROP COLUMN `updatedById`,
    ADD COLUMN `updatedById` INTEGER NULL;
