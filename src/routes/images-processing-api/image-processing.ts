import { Router, Request, Response } from 'express'
import { existsSync } from 'fs'
import path from 'path'

//Utils
import { IMAGES_NAMES } from '../../utils/arrays'
import resizeImages from '../../utils/resize'
import { ERROR_400_BAD_REQUEST, ERROR_404_NOT_FOUND } from '../../utils/errors'

const imageProcessingRoutes = Router()

imageProcessingRoutes.get('/images', async (req: Request, res: Response) => {
  const name = req.query.name as string
  const width = req.query.width as string
  const height = req.query.height as string

  const isImageNameExist = IMAGES_NAMES.includes(name)
  const location = path.resolve(`./assets/images/${name}.jpg`)
  const thumbnailsLocation = path.resolve('./assets/thumbnails')

  // Checks and display an error if the name query is not provided
  if (name === undefined) {
    return res.status(400).send(`${ERROR_400_BAD_REQUEST} "name"`)
  }

  // Checks and display an error if the image does not exist
  if (!isImageNameExist || !existsSync(location)) {
    return res.status(404).send(ERROR_404_NOT_FOUND)
  }

  // Checks if width or height not provided
  if (!width || !height) {
    return res.status(404).send(ERROR_404_NOT_FOUND)
  }

  await resizeImages(location, name, width, height)

  res
    .status(200)
    .sendFile(thumbnailsLocation + `/${name}x${width}x${height}.png`)
})

export default imageProcessingRoutes