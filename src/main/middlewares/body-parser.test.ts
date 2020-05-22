import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
  test('should parse body as json', async () => {
    const URL = '/test_body_parser'
    const data = { name: 'any_name' }

    app.post(URL, (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post(URL)
      .send(data)
      .expect(data)
  })
})
