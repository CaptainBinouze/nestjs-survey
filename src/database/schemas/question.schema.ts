import * as mongoose from 'mongoose'

export const QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [5, 'TITLE_IS_TOO_SHORT'],
        maxlength: [255, 'TITLE_IS_TOO_LONG'],
        required: [true, 'TITLE_IS_BLANK']
    },
    type: {
        type: String,
        enum: ['one', 'multiple', 'text'],
        required: [true, 'TYPE_IS_BLANK']
    },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option'
    }]
}, {
    versionKey: false,
    timestamps: true
})