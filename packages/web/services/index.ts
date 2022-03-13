import axios from 'axios'

import Config from '../config'

export const request = async ({
  method,
  path,
  data = null,
  params = null,
}: {
  method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH'
  path: string
  data?: Object | null
  params?: Object | null
}) => {
  await axios.request({
    method,
    url: `${Config.API_BASE_URL}${path}`,
    data,
    params,
  })
}
