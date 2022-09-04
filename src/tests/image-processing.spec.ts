import supertest from 'supertest'
import path from 'path'
import { existsSync } from 'fs'

import app from '../index'
import resizeImages from '../utils/resize'

const request = supertest(app)

describe('Images processing app', () => {
  it('Should resize an image', async () => {
    const name = 'encenadaport'
    const location = path.resolve(`./assets/images/${name}.jpg`)
    const width = '200'
    const height = '200'
    const data: unknown = await resizeImages(location, name, width, height)
    expect(data as object).toEqual({
      format: 'png',
      width: 200,
      height: 200,
      channels: 3,
      premultiplied: false,
      size: 87113,
    })
  })

  it('Should get the RESIZED image', async () => {
    const name = 'encenadaport'
    const thumbnailsLocation = path.resolve('./assets/thumbnails')
    const width = 200
    const height = 200
    const resizedImage = thumbnailsLocation + `/${name}x${width}x${height}.png`

    expect(existsSync(resizedImage)).toBeTruthy()
  })

  it('Should get an error "400" for wrong dimensions', async () => {
    const name = 'encenadaport'
    const thumbnailsLocation = path.resolve('./assets/thumbnails')
    const width = 400
    const height = 400
    const resizedImage = thumbnailsLocation + `/${name}x${width}x${height}.png`

    expect(existsSync(resizedImage)).toBeFalsy()
  })

  it('Should get an error "400" for not found resource', async () => {
    const name = 'test'
    const width = 200
    const height = 200
    const response = await request.get(
      `/api/images?name=${name}x${width}x${height}`
    )
    expect(response.status).toBe(404)
  })
})
