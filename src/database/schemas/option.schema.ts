import * as mongoose from 'mongoose'

export const OptionSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [5, 'TITLE_IS_TOO_SHORT'],
        maxlength: [255, 'TITLE_IS_TOO_LONG'],
        required: [true, 'TITLE_IS_BLANK']
    },
    value: {
        type: Number,
        min: [0, 'VALUE_IS_TOO_SMALL'],
        max: [100, 'VALUE_IS_TOO_BIG']
    }
}, {
    versionKey: false,
    timestamps: true
})