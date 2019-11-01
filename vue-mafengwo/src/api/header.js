import { fetchGet } from './config'

export default {
  getHeaderInfo () {
    return fetchGet('/api/header/header/tab_list_info')
  }
}
