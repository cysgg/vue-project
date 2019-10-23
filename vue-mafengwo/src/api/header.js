import { fetchGet } from './config'

export default {
  getHeaderInfo (params) {
    return fetchGet('/api/header/header/tab_list_info')
  }
}
