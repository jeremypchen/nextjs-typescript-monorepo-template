import { Model, ModelObject } from 'objection'

export default class UserAuthTable extends Model {
  userId!: string
  accessToken!: string
  refreshToken!: string
  expirationDate!: string
  createdAt!: string
  updatedAt!: string
  scopes!: string

  static tableName = 'user_auth'
}

export type UserAuth = ModelObject<UserAuthTable>
