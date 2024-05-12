import express from 'express'
import { newMail } from '../Handlers/contactHandler.js'
import { addVisitor } from '../Handlers/visitorHandler.js'

const router = express.Router()

router.post('/mail/new', newMail)
router.post('/visitor/add', addVisitor)

export default router
