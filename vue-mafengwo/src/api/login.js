import { fetchGet, fetchPost } from './config'

export default {
  getBgInfo () {
    return fetchGet('/api/login/bgInfo/bgInfo_info')
  },
  postLoginInfo (query) {
    return fetchPost('/api/login/userInfo/userInfo_info', query)
  }
}
