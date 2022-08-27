import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'

import { PORT } from './utils/constants'
import * as dotenv from 'dotenv'

dotenv.config()
const app: Application = express()

app.use(morgan('dev'))

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Image Processing Application')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

export default app
