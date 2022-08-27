import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Images processing app', () => {
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
