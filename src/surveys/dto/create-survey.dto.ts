import { CreateQuestionDto } from "./create-question.dto";

export class CreateSurveyDto {
    public name: string;
    public description: string;
    public slug: string;
    public questions: CreateQuestionDto[];
}
