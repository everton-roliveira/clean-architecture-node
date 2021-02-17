import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdaptar } from '../../utils/email-validator-adapter'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'

export const makeSignUpController = (): SignUpController => {
  const SALT = 12
  const emailValidatorAdaptar = new EmailValidatorAdaptar()
  const bcryptAdapter = new BcryptAdapter(SALT)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  return new SignUpController(emailValidatorAdaptar, dbAddAccount)
}
