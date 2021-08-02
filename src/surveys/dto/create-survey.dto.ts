import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { CreateQuestionDto } from "./create-question.dto";

export class CreateSurveyDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    public title: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)  
    public description: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    public slug: string;

    @IsOptional()
    public questions: CreateQuestionDto[];
}
