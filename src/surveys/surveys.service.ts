import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { CreateQuestionDto } from './dto/create-question.dto';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Answer, Option, Question, Survey } from './interfaces/survey.interface';

@Injectable()
export class SurveysService {

  constructor(

    @Inject('SURVEY_MODEL') private readonly surveyModel: Model<Survey>,
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
    return this.surveyModel.findByIdAndRemove(id);
  }

  async addQuestion(id: string, createQuestionDto: CreateQuestionDto): Promise<Survey> {
    return this.surveyModel.findByIdAndUpdate(id, {
      $push: { 
        questions: createQuestionDto
      }
    }, { new: true });
  }

  async removeQuestion(id: string, questionId: string): Promise<Survey> {
    return this.surveyModel.findByIdAndUpdate(id, {
      $pull: { 
        questions: {
          _id: questionId
        }
      }
    }, { new: true });
  }

  async addAnswer(id: string, createAnswerDto: CreateAnswerDto): Promise<Survey> {
    const answer = await this.answerModel.create(createAnswerDto);

    return this.surveyModel.findByIdAndUpdate(id, {
      $push: {
        answers: answer._id
      }
    }, { new: true });
  }
      
}
