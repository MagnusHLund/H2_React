import bodyParser from 'body-parser'
import express from 'express'

import { corsMiddleware } from './Middleware/corsMiddleware.js'
import router from './Utils/router.js'

const app = express()
const PORT = 1408

app.use(bodyParser.json())

corsMiddleware()
app.use(router)

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})
