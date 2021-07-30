import { Module } from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { SurveysController } from './surveys.controller';
import { DatabaseModule } from 'src/database/database.module';
import { answersProviders, optionsProviders, questionsProviders, surveysProviders } from 'src/database/database.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SurveysController],
  providers: [
    SurveysService, 
    ...surveysProviders, 
    ...questionsProviders, 
    ...optionsProviders, 
    ...answersProviders
  ]
})
export class SurveysModule {}
