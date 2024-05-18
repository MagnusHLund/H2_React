import { callProcedure } from '../Utils/database.js'
import { sendEmail } from './../Utils/sendEmail.js'

export async function newMail(req, res) {
  try {
    // Stored procedure arguments [ip, from, email, message]
    const ipAddress =
      req.headers['x-forwarded-for'] || req.connection.remoteAddress
    await callProcedure('InsertMail', [
      ipAddress,
      req.body.from,
      req.body.email,
      req.body.message,
    ])
    //await sendEmail(req.body) // This function does not work, due to some missing configuration with the google cloud console.
    res.send('Email has been sent and stored!')
  } catch (error) {
    res.status(500).send(error.message)
  }
}
