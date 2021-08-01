import { CreateOptionDto } from "./create-option.dto";

export class CreateQuestionDto {
    public title: string;
    public type: string;
    public options: CreateOptionDto[];
}
