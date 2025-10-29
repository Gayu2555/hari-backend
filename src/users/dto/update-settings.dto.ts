// src/users/dto/update-settings.dto.ts
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateSettingsDto {
  @IsOptional()
  @IsBoolean()
  notificationsEnabled?: boolean;

  @IsOptional()
  @IsBoolean()
  darkModeEnabled?: boolean;

  @IsOptional()
  @IsBoolean()
  autoPlayVideos?: boolean;

  @IsOptional()
  @IsString()
  language?: string;
}
