import cors from 'cors'
import express from 'express'

export function corsMiddleware() {
  const app = express()
  app.use(
    cors({
      origin: 'http://localhost:5173',
      optionsSuccessStatus: 200,
    })
  )
}
