import { fetchGet } from './config'

export default {
  getFocusInfo () {
    return fetchGet('/api/mdd/focus/focus_info')
  },
  getHotmddInfo () {
    return fetchGet('/api/mdd/hotmdd/hotmdd_info_list')
  },
  getSeasonRecommendInfo () {
    return fetchGet('/api/mdd/seasonRecommend/seasonRecommend_info_list')
  },
  getCatemddInfo () {
    return fetchGet('/api/mdd/catemdd/catemdd_info_list')
  },
  getQqmddInfo () {
    return fetchGet('/api/mdd/qqmdd/qqmdd_info_list')
  }
}
