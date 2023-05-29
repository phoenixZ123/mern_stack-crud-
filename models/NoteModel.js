import mongoose from "mongoose";

const Schema = mongoose.Schema({
    description: {
        type: String,
        require: true
    },

}, { timestamps: true })

export const Note = mongoose.model('Note', Schema)