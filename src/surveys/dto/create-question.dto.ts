import { IsEnum, isEnum, IsNotEmpty, IsOptional, isString, IsString, MaxLength, MinLength } from "class-validator";
import { CreateOptionDto } from "./create-option.dto";

export class CreateQuestionDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    public title: string;

    @IsNotEmpty()
    @IsString()
    @IsEnum(["one","multiple"])
    public type: string;

    @IsOptional()
    public options: CreateOptionDto[];
}
