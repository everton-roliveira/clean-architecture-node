import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/account-repository/helpers/mongo-helper'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })
  beforeAll(async () => {
    const accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

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
