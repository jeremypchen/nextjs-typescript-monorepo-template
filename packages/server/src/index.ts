import api from './api'
import { connect } from './lib/database'

const PORT = process.env.PORT || 8000

connect().then(() => {
  console.log('connected to database')

  api.listen(PORT, () => {
    console.log(`listening on ${PORT}...`)
  })
})
