import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    const fakeHash = 'hash_value'
    return await new Promise(resolve => resolve(fakeHash))
  }
}))

describe('Bcrypt Adapter', () => {
  test('should call bcrypt with correct values', async () => {
    const salt = 12
    const sut = new BcryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')

    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('should return a hash on success', async () => {
    const salt = 12
    const sut = new BcryptAdapter(salt)
    const hash = await sut.encrypt('any_value')
    expect(hash).toEqual('hash_value')
  })
})
