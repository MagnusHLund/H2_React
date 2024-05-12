import { callProcedure } from '../Utils/database.js'
import { sendEmail } from './../Utils/sendEmail.js'

export function newMail(req, res) {
  // Stored procedure arguments [ip, from, email, message]
  callProcedure('InsertMail', [
    req.ip,
    req.body.from,
    req.body.email,
    req.body.message,
  ])
  sendEmail(req.body)
  res.send('Email has been sent and stored!')
}
