import * as mongoose from 'mongoose'

export const AnswerSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    value: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option'
    }
}, {
    versionKey: false,
    timestamps: true
})
