import { Model, ModelObject } from 'objection'

export enum UserType {
  Candidate = 'candidate',
  Employer = 'employer',
}

export default class Lead extends Model {
  id?: number
  first_name?: string
  last_name?: string
  email_address!: string
  phone_number?: string
  user_type?: UserType
  metadata?: Object

  created_at?: string

  static tableName = 'lead'

  static jsonSchema = {}
}

export type Leadshape = ModelObject<Lead>
