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

  async create(createSurveyDto: CreateSurveyDto): Promise<Survey> {
    return this.surveyModel.create(createSurveyDto);
  }

  async findAll(): Promise<Survey[]> {
    
    return this.surveyModel.find({})
  }

  async findOne(id: string): Promise<Survey> {
    
    return this.surveyModel.findById(id)
  }

  async update(id: string, updateSurveyDto: UpdateSurveyDto): Promise<Survey> {
    return this.surveyModel.findByIdAndUpdate(id, updateSurveyDto, { new: true });
  }

  async remove(id: string) {
    return `This action removes a #${id} survey`;
  }

}
