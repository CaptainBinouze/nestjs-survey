import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { CreateQuestionDto } from './dto/create-question.dto';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Controller('surveys')
export class SurveysController {
  constructor(private readonly surveysService: SurveysService) {}

  @Post()
  create(@Body() createSurveyDto: CreateSurveyDto) {
    return this.surveysService.create(createSurveyDto);
  }

  @Get()
  findAll() {
    return this.surveysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surveysService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurveyDto: UpdateSurveyDto) {
    return this.surveysService.update(id, updateSurveyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveysService.remove(id);
  }

  @Patch(':id/questions')
  addQuestion(@Param('id') id: string, @Body() createQuestionDto: CreateQuestionDto) {
    return this.surveysService.addQuestion(id, createQuestionDto);
  }

  @Patch(':id/questions/:questionId')
  removeQuestion(@Param('id') id: string, @Param('questionId') questionId: string) {
    return this.surveysService.removeQuestion(id, questionId);
  }

  @Post(':id/answers')
  addAnswer(@Param('id') id: string, @Body() createAnswerDto: CreateAnswerDto) {
    return this.surveysService.addAnswer(id, createAnswerDto);
  }
}
