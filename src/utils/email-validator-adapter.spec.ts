import { EmailValidatorAdaptar } from './email-validator-adapter'

describe('EmailValidator Adapter', () => {
  test('should return false if validator return false', () => {
    const sut = new EmailValidatorAdaptar()
    const isValid = sut.isValid('invalid_email@email.com')
    expect(isValid).toBeFalsy()
  })
})
