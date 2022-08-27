import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'

import { PORT } from './utils/constants'
import appRoutes from './routes'
dotenv.config()
const app: Application = express()

// 3rd party logger
app.use(morgan('dev'))

// Endpoints
app.use(appRoutes)

// error if there's no matched route.
app.get('*', (req: Request, res: Response) => {
  res.status(404).json({ error: 'Resource not found' })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

export default app
