import { EmailValidator } from '../presentation/protocols/email-validator'

export class EmailValidatorAdaptar implements EmailValidator {
  isValid (email: string): boolean {
    return false
  }
}
