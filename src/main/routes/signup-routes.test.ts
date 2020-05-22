import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('should return an account on success', async () => {
    const URL = '/api/signup'
    const account = {
      name: 'Everton',
      email: 'everton@email.com',
      password: 'password123',
      passwordConfirmation: 'password123'
    }
    await request(app)
      .post(URL)
      .send(account)
      .expect(200)
  })
})
