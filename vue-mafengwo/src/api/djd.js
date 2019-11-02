import { fetchGet } from './config'

export default {
  getZtzsInfo () {
    return fetchGet('/api/djd/ztzs/ztzs_info_list')
  },
  getTjjdInfo () {
    return fetchGet('/api/djd/tjjd/tjjd_info_list')
  }
}
