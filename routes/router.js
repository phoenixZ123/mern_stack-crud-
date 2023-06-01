import express from 'express'
import { dataPost, getById, home, remove, update } from '../controller/control.js'
const router = express.Router()
// read
router.get('/get', home)
router.get('/get/:id', getById)
//edit
router.put('/:id', update)
//delete
router.delete('/:id', remove)
//create
router.post('/post', dataPost)
export default router;