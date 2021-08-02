import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateOptionDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    public title: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(100)
    public value: number;
}