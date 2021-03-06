import * as mongoose from 'mongoose'


export const SurveySchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [5, 'TITLE_IS_TOO_SHORT'],
        maxlength: [255, 'TITLE_IS_TOO_LONG'],
        required: [true, 'TITLE_IS_BLANK']
    },
    description: {
        type: String,
        minlength: [5, 'DESCRIPTION_IS_TOO_SHORT'],
        maxlength: [255, 'DESCRIPTION_IS_TOO_LONG'],
        required: [true, 'DESCRIPTION_IS_BLANK']
    },
    slug: {
        type: String,
        minlength: [5, 'SLUG_IS_TOO_SHORT'],
        maxlength: [255, 'SLUG_IS_TOO_LONG'],
        required: [true, 'SLUG_IS_BLANK']
    },
    questions: [{
        title: {
            type: String,
            minlength: [5, 'QUESTION_TITLE_IS_TOO_SHORT'],
            maxlength: [255, 'QUESTION_TITLE_IS_TOO_LONG'],
            required: [true, 'QUESTION_TITLE_IS_BLANK']
        },
        type: {
            type: String,
            enum: ['one', 'multiple'],
            required: [true, 'TYPE_IS_BLANK']
        },
        options: [{
            title: {
                type: String,
                minlength: [1, 'TITLE_IS_TOO_SHORT'],
                maxlength: [255, 'TITLE_IS_TOO_LONG'],
                required: [true, 'TITLE_IS_BLANK']
            },
            value: {
                type: Number,
                min: [0, 'VALUE_IS_TOO_SMALL'],
                max: [100, 'VALUE_IS_TOO_BIG']
            }
        }]
    }],
    answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer'
    }],
}, {
    versionKey: false,
    timestamps: true
})