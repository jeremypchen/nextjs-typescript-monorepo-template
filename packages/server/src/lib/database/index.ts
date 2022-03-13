import Knex from 'knex'
import knexConfig from './config'
import { Model } from 'objection'

export const connect = async () => {
  const knexConnection = Knex(knexConfig)

  Model.knex(knexConnection)

  return true
}
