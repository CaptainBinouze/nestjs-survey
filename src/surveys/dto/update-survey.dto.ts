import { IsOptional, IsString, MaxLength, MinLength  } from "class-validator";

export class UpdateSurveyDto {

    @IsOptional()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    public title: string;

    @IsOptional()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    public description: string;
}
