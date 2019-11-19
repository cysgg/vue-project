import { fetchGet } from './config'

export default {
  getBgInfo () {
    return fetchGet('/api/login/bgInfo/bgInfo_info')
  }
}
