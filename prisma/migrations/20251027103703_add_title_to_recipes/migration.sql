/*
  Warnings:

  - You are about to drop the column `order` on the `ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `isPopular` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `recipeCategory` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `recipeId` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `recipeImage` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `recipeMethod` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `recipeName` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `recipeReview` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `recipeServing` on the `recipes` table. All the data in the column will be lost.
  - Added the required column `title` to the `recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `recipes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `recipes` DROP FOREIGN KEY `recipes_authorId_fkey`;

-- DropIndex
DROP INDEX `recipes_authorId_fkey` ON `recipes`;

-- DropIndex
DROP INDEX `recipes_recipeId_key` ON `recipes`;

-- AlterTable
ALTER TABLE `ingredients` DROP COLUMN `order`,
    ADD COLUMN `quantity` DOUBLE NULL,
    ADD COLUMN `unit` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `recipes` DROP COLUMN `authorId`,
    DROP COLUMN `isPopular`,
    DROP COLUMN `recipeCategory`,
    DROP COLUMN `recipeId`,
    DROP COLUMN `recipeImage`,
    DROP COLUMN `recipeMethod`,
    DROP COLUMN `recipeName`,
    DROP COLUMN `recipeReview`,
    DROP COLUMN `recipeServing`,
    ADD COLUMN `category` VARCHAR(191) NULL,
    ADD COLUMN `description` TEXT NULL,
    ADD COLUMN `image` TEXT NULL,
    ADD COLUMN `isPublic` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `servings` INTEGER NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL,
    MODIFY `prepTime` INTEGER NULL,
    MODIFY `cookTime` INTEGER NULL;

-- AlterTable
ALTER TABLE `reviews` MODIFY `comment` TEXT NULL;

-- CreateTable
CREATE TABLE `recipe_steps` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stepNumber` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `recipeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `recipes` ADD CONSTRAINT `recipes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `recipe_steps` ADD CONSTRAINT `recipe_steps_recipeId_fkey` FOREIGN KEY (`recipeId`) REFERENCES `recipes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
