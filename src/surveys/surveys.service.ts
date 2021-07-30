import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Answer, Option, Question, Survey } from './interfaces/survey.interface';

@Injectable()
export class SurveysService {

  constructor(

    @Inject('SURVEY_MODEL') private readonly surveyModel: Model<Survey>,
    @Inject('QUESTION_MODEL') private readonly questionModel: Model<Question>,
    @Inject('OPTION_MODEL') private readonly optionModel: Model<Option>,
    @Inject('ANSWER_MODEL') private readonly answerModel: Model<Answer>
  ) { }

  create(createSurveyDto: CreateSurveyDto) {
    return 'This action adds a new survey';
  }

  findAll() {
    return `This action returns all surveys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} survey`;
  }

  update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return `This action updates a #${id} survey`;
  }

  remove(id: number) {
    return `This action removes a #${id} survey`;
  }
}
