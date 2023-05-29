import express from 'express'
import { dataPost, getById, home, remove, update } from '../controller/control.js'
const router = express.Router()

router.get('/get', home)
router.get('/get/:id', getById)
router.get('/:id', update)
router.delete('/:id', remove)

router.post('/post', dataPost)
export default router;