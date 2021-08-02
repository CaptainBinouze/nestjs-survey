import { IsMongoId, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { ChoiceDto } from "./choice.dto";

export class CreateAnswerDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    public name: string;

    @IsMongoId()
    @IsNotEmpty()
    @IsString()
    public survey: string;

    @IsNotEmpty()
    public choices: ChoiceDto[];
}