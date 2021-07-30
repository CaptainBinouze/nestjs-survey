import { Connection} from 'mongoose';
import * as mongoose from 'mongoose';
import { SurveySchema } from './schemas/survey.schema';
import { QuestionSchema } from './schemas/question.schema';
import { OptionSchema } from './schemas/option.schema';
import { AnswerSchema } from './schemas/answer.schema';

export const databaseProviders = [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: (): Promise<typeof mongoose> =>
        mongoose.connect(process.env.DATABASE_URI)
    },
];

export const surveysProviders = [
  {
    provide: 'SURVEY_MODEL',
    useFactory: (connection: Connection) => connection.model('Survey', SurveySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const questionsProviders = [
  {
      provide: 'QUESTION_MODEL',
      useFactory: (connection: Connection) => connection.model('Question', QuestionSchema),
      inject: ['DATABASE_CONNECTION'],
  },
];

export const optionsProviders = [
  {
      provide: 'OPTION_MODEL',
      useFactory: (connection: Connection) => connection.model('Option', OptionSchema),
      inject: ['DATABASE_CONNECTION'],
  },
];

export const answersProviders = [
  {
      provide: 'ANSWER_MODEL',
      useFactory: (connection: Connection) => connection.model('Answer', AnswerSchema),
      inject: ['DATABASE_CONNECTION'],
  },
];