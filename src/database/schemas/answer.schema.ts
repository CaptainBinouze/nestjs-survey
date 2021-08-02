import * as mongoose from 'mongoose'

export const AnswerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    survey: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Survey' 
    },
    choices: [{
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        },
        value: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option'
        }
    }]
}, {
    versionKey: false,
    timestamps: true
})
