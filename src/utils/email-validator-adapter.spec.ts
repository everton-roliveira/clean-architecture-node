import { EmailValidatorAdaptar } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('EmailValidator Adapter', () => {
  test('should return false if validator return false', () => {
    const sut = new EmailValidatorAdaptar()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@email.com')
    expect(isValid).toBeFalsy()
  })

  test('should return false if validator return false', () => {
    const sut = new EmailValidatorAdaptar()
    const isValid = sut.isValid('valid_email@email.com')
    expect(isValid).toBeTruthy()
  })
})
