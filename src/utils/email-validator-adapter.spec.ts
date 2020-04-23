import { EmailValidatorAdaptar } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

const makeSut = (): EmailValidatorAdaptar => {
  return new EmailValidatorAdaptar()
}
describe('EmailValidator Adapter', () => {
  test('should return false if validator return false', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@email.com')
    expect(isValid).toBeFalsy()
  })

  test('should return false if validator return false', () => {
    const sut = makeSut()
    const isValid = sut.isValid('valid_email@email.com')
    expect(isValid).toBeTruthy()
  })

  test('should call validator with correct email', () => {
    const ANY_EMAIL = 'any_email@email.com'
    const sut = makeSut()
    const isEmail = jest.spyOn(validator, 'isEmail')
    sut.isValid(ANY_EMAIL)
    expect(isEmail).toHaveBeenCalledWith(ANY_EMAIL)
  })
})
