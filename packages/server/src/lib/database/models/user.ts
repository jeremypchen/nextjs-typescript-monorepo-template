import { Model, ModelObject } from 'objection'

export default class UserTable extends Model {
  id!: string

  email!: string
  firstName!: string
  lastName!: string
  firebaseUserId!: string

  createdAt!: string
  updatedAt!: string

  static tableName = 'user'
}

export type User = ModelObject<UserTable>
