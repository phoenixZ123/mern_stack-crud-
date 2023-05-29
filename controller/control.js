import { Note } from "../models/NoteModel.js";

//delete
export const remove = async (req, res) => {
    const { id } = req.params;
    const note = await Note.deleteOne({ _id: id })
    res.json(note)
}

//update
export const update = async (req, res) => {
    const { id } = req.params;
    const note = await Note.findByIdAndUpdate(id, req.body, { new: true })
    res.json(note)
}


//get data by id
export const getById = async (req, res) => {
    const { id } = req.params;
    const note = await Note.findOne({ _id: id })
    res.json(note)
}

//get all
export const home = async (req, res) => {
    const note = await Note.find()
    res.json(note)
}

export const dataPost = async (req, res) => {

    const note = await Note.create(req.body)
    res.json(note)
}