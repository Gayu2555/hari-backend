// src/users/dto/update-user.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { RegisterDto } from '../../auth/dto/register.dto';
import {
  IsOptional,
  IsBoolean,
  IsString,
  MinLength,
  IsEmail,
  IsUrl,
  IsPhoneNumber,
} from 'class-validator';

export class UpdateUserDto extends PartialType(RegisterDto) {
  @IsOptional()
  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  name?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Please provide a valid email address' })
  email?: string;

  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

  @IsOptional()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password?: string;

  @IsOptional()
  @IsUrl({}, { message: 'Please provide a valid avatar URL' })
  avatar?: string;

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
