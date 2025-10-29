// src/auth/dto/register.dto.ts
import {
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
  IsUrl,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  name: string;

  @IsEmail({}, { message: 'Please provide a valid email address' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @IsOptional()
  @IsUrl({}, { message: 'Please provide a valid avatar URL' })
  avatar?: string;

  @IsOptional()
  @IsString()
  phone?: string;
}
