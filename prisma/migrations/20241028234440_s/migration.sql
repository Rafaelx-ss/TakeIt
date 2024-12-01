/*
  Warnings:

  - You are about to drop the `event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `registration` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `Event_organizerId_fkey`;

-- DropForeignKey
ALTER TABLE `registration` DROP FOREIGN KEY `Registration_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `registration` DROP FOREIGN KEY `Registration_userId_fkey`;

-- DropTable
DROP TABLE `event`;

-- DropTable
DROP TABLE `registration`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `categorias` (
    `categoriaID` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreCategoria` VARCHAR(255) NOT NULL,
    `descripcionCategoria` VARCHAR(255) NOT NULL,
    `createdAt` INTEGER NOT NULL DEFAULT 1,
    `updatedAt` INTEGER NULL DEFAULT 1,
    `createdById` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedById` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `activoCategoria` BIT(1) NOT NULL,
    `estadoCategoria` BIT(1) NOT NULL,

    PRIMARY KEY (`categoriaID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `direccionesusuarios` (
    `direccionesUsuariosID` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioID` INTEGER NOT NULL,
    `cpDireccion` VARCHAR(250) NOT NULL,
    `municipioDireccion` VARCHAR(250) NOT NULL,
    `estadoID` INTEGER NOT NULL,
    `direccion` VARCHAR(250) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `activoDireccion` BIT(1) NOT NULL DEFAULT (b'1'),
    `estadoDireccion` BIT(1) NOT NULL DEFAULT (b'1'),

    INDEX `direccionesusuarios_ibfk_1`(`usuarioID`),
    INDEX `direccionesusuarios_ibfk_2`(`estadoID`),
    PRIMARY KEY (`direccionesUsuariosID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estados` (
    `estadoID` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreEstado` VARCHAR(100) NOT NULL,
    `paisID` INTEGER NOT NULL,
    `activoEstado` BIT(1) NOT NULL,
    `estadoEstado` BIT(1) NOT NULL,

    INDEX `paisID`(`paisID`),
    PRIMARY KEY (`estadoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `eventos` (
    `eventosID` INTEGER NOT NULL AUTO_INCREMENT,
    `patrocinadorID` INTEGER NOT NULL,
    `categoriaID` INTEGER NOT NULL,
    `subCategoriaID` INTEGER NOT NULL,
    `nombreEvento` VARCHAR(255) NOT NULL,
    `lugarEvento` VARCHAR(255) NOT NULL,
    `maximoParticipantesEvento` VARCHAR(255) NULL,
    `costoEvento` DECIMAL(10, 2) NULL,
    `descripcionEvento` VARCHAR(255) NULL,
    `cpEvento` VARCHAR(255) NOT NULL,
    `municioEvento` VARCHAR(255) NOT NULL,
    `estadoID` VARCHAR(255) NOT NULL,
    `direccionEvento` VARCHAR(255) NOT NULL,
    `telefonoEvento` VARCHAR(255) NOT NULL,
    `fechaEvento` VARCHAR(255) NOT NULL,
    `horaEvento` VARCHAR(255) NOT NULL,
    `duracionEvento` VARCHAR(255) NOT NULL,
    `kitEvento` VARCHAR(255) NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdById` INTEGER NOT NULL,
    `updatedById` INTEGER NOT NULL,
    `activoEvento` BIT(1) NOT NULL DEFAULT (b'1'),
    `estadoEvento` BIT(1) NOT NULL DEFAULT (b'1'),

    INDEX `eventos_ibfk_1`(`patrocinadorID`),
    INDEX `eventos_ibfk_2`(`categoriaID`),
    INDEX `eventos_ibfk_3`(`subCategoriaID`),
    PRIMARY KEY (`eventosID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paises` (
    `paisID` INTEGER NOT NULL AUTO_INCREMENT,
    `nombrePais` VARCHAR(100) NOT NULL,
    `activoPais` BIT(1) NOT NULL,
    `estadoPais` BIT(1) NOT NULL,

    PRIMARY KEY (`paisID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `patrocinadores` (
    `patrocinadorID` INTEGER NOT NULL AUTO_INCREMENT,
    `fotoPatrocinador` LONGBLOB NULL,
    `nombrePatrocinador` VARCHAR(255) NOT NULL,
    `representantePatrocinador` VARCHAR(255) NOT NULL,
    `rfcPatrocinador` VARCHAR(255) NOT NULL,
    `correoPatrocinador` VARCHAR(255) NOT NULL,
    `telefonoPatrocinador` VARBINARY(255) NOT NULL,
    `numeroRepresentantePatrocinador` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`patrocinadorID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subcategorias` (
    `subcategoriaID` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreSubcategoria` VARCHAR(255) NOT NULL,
    `descripcionSubcategoria` VARCHAR(255) NOT NULL,
    `createdAt` INTEGER NOT NULL,
    `updatedAt` INTEGER NULL,
    `createdById` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedById` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `activoSubcategoria` BIT(1) NOT NULL DEFAULT (b'1'),
    `estadoSubcategoria` BIT(1) NOT NULL DEFAULT (b'1'),

    PRIMARY KEY (`subcategoriaID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `usuarioID` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreUsuario` VARCHAR(250) NOT NULL,
    `usuario` VARCHAR(250) NOT NULL,
    `email` VARCHAR(250) NOT NULL,
    `password` VARCHAR(400) NOT NULL,
    `rolUsuario` VARCHAR(250) NOT NULL,
    `telefonoUsuario` VARCHAR(250) NOT NULL,
    `fechaNacimientoUsuario` VARCHAR(250) NULL,
    `generoUsuario` VARCHAR(250) NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `activoUsuario` BIT(1) NOT NULL DEFAULT (b'1'),
    `estadoUsuario` BIT(1) NOT NULL DEFAULT (b'1'),

    UNIQUE INDEX `usuario`(`usuario`),
    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`usuarioID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `direccionesusuarios` ADD CONSTRAINT `direccionesusuarios_ibfk_1` FOREIGN KEY (`usuarioID`) REFERENCES `usuarios`(`usuarioID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `direccionesusuarios` ADD CONSTRAINT `direccionesusuarios_ibfk_2` FOREIGN KEY (`estadoID`) REFERENCES `estados`(`estadoID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `estados` ADD CONSTRAINT `estados_ibfk_1` FOREIGN KEY (`paisID`) REFERENCES `paises`(`paisID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `eventos` ADD CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`patrocinadorID`) REFERENCES `patrocinadores`(`patrocinadorID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `eventos` ADD CONSTRAINT `eventos_ibfk_2` FOREIGN KEY (`categoriaID`) REFERENCES `categorias`(`categoriaID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `eventos` ADD CONSTRAINT `eventos_ibfk_3` FOREIGN KEY (`subCategoriaID`) REFERENCES `subcategorias`(`subcategoriaID`) ON DELETE RESTRICT ON UPDATE RESTRICT;
