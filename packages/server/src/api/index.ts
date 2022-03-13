import cors from 'cors'
import express from 'express'
require('express-async-errors')

import dotenv from 'dotenv'
dotenv.config()

import leadRouter from './lead'

const api = express()

api.use(cors())
api.use(express.json())
api.use(express.urlencoded({ extended: false }))

export class AppError extends Error {
  public code: number

  constructor({ code = 500 }: { code?: number }) {
    super()
    this.code = code
  }
}

const errorMiddleware = (
  err: AppError,
  req: express.Request,
  res: express.Response,
  next: () => void
) => {
  if (err) {
    console.error(err)
    res.status(err.code || 500).send({ message: err.message })
  } else {
    next()
  }
}

api.get('/', (req: express.Request, res: express.Response) => {
  res.send('hello world!')
})

api.use('/lead', leadRouter)

api.use(errorMiddleware)

export default api
