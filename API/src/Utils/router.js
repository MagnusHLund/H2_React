import express from 'express'
import { newMail } from '../Handlers/contactHandler.js'
import { addVisitor, getVisitorCount } from '../Handlers/visitorHandler.js'

const router = express.Router()

router.post('/mail/new', newMail)
router.post('/visitor/add', addVisitor)
router.get('/visitor/getCount', getVisitorCount)

export default router
