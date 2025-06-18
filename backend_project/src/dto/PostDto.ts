//backend_project/src/dto/PostDto.ts
import { IsString, MinLength, IsOptional } from 'class-validator';

export class PostDto {
    @IsString()
    @MinLength(1)
    title!: string;

    @IsString()
    @MinLength(1)
    text!: string;

    @IsOptional()
    @IsString()
    imageUrl?: string; // 🆕 Додаємо imageUrl як необов’язкове поле
}
