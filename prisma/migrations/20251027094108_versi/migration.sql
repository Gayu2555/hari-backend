-- AlterTable
ALTER TABLE `recipes` ADD COLUMN `authorId` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `autoPlayVideos` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `darkModeEnabled` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `language` VARCHAR(191) NOT NULL DEFAULT 'id',
    ADD COLUMN `notificationsEnabled` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `phone` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `recipes` ADD CONSTRAINT `recipes_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
