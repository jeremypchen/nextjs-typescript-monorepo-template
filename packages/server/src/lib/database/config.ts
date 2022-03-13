import { knexSnakeCaseMappers } from 'objection'

import Config from '../../config'

export default {
  client: 'pg',
  connection: {
    connectionString: Config.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },
  pool: { min: 2, max: 5 },
  ...knexSnakeCaseMappers(),
}
