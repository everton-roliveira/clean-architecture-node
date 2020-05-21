import { AccountModel } from '../../../../domain/models/account'
import { MongoHelper } from './helpers/mongo-helper'
import { AccountMongoRepository } from './account'

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository()
  }

  test('should return an account on success', async () => {
    const sut = makeSut()
    const data: AccountModel = {
      id: null,
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_passord'
    }
    const account = await sut.add(data)
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBeTruthy()
    expect(account.email).toBeTruthy()
    expect(account.password).toBeTruthy()
  })
})
