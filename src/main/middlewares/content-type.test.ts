import request from 'supertest'
import app from '../config/app'

describe('Content Type Middleware', () => {
  test('should return default content type as json', async () => {
    const URL = '/text_content_type'

    app.get(URL, (req, res) => {
      res.send('')
    })
    await request(app)
      .get(URL)
      .expect('content-type', /json/)
  })

  test('should return xml content type when forced', async () => {
    const URL = '/text_content_type_xml'

    app.get(URL, (req, res) => {
      res.type('xml')
      res.send('')
    })
    await request(app)
      .get(URL)
      .expect('content-type', /xml/)
  })
})
