import { IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class ChoiceDto {
    
    @IsString()
    @IsMongoId()
    @IsNotEmpty()
    public question: string;

    @IsString()
    @IsMongoId()
    @IsNotEmpty()
    public value: string;
}