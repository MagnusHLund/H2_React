import express from 'express'
import { newMessage } from '../Handlers/contactHandler.js'
import { addVisitor } from '../Handlers/visitorHandler.js'

const router = express.router()

router.get('/contact/new', newMessage())
router.get('visitor/add', addVisitor())

export default router
