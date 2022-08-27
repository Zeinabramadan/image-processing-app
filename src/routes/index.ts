import { Router, Request, Response } from 'express'
import imageProcessingRoutes from './images-processing-api/image-processing'

const appRoutes = Router()

appRoutes.get('/', (req: Request, res: Response) => {
  res.status(200).send('Welcome to Image Processing Application')
})

// ENDPOINTS Routes
appRoutes.use('/api', imageProcessingRoutes)

export default appRoutes
