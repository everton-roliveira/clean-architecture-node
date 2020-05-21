import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from './helpers/mongo-helper'

export class AccountMongoRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const collection = MongoHelper.getCollection('accounts')
    const result = await collection.insertOne(accountData)
    const account = result.ops[0]
    const { _id, ...accountWithoutId } = account
    return Object.assign({}, accountWithoutId, { id: _id })
  }
}
