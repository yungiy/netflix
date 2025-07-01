import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateDirectorDto {
    @IsNotEmpty()
    @IsOptional()
    name?: string;
  
    @IsNotEmpty()
    @IsDateString()
    @IsOptional()
    dob?: string;
  
    @IsNotEmpty()
    @IsOptional()
    nationality?: string;
}
