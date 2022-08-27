import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Tests Server', () => {
  it('Should get the welcome message', async () => {
    const response = await request.get('/')
    expect(response.text).toBe('Welcome to Image Processing Application')
  })

  it('Should get 200 response status', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })

  it('Should get 404 for not exists routes', async () => {
    const response = await request.get('/any-route')
    expect(response.status).toBe(404)
  })
})
