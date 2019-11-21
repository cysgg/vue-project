import { fetchGet, fetchPost } from './config'

export default {
  getStrategyInfo (params) {
    return fetchGet('/api/strategy/strategyInfo/strategyInfo_info', params)
  },
  getStrategyContentInfo (params) {
    return fetchGet('/api/strategy/strategyContent/strategyContent_info', params)
  },
  getStrategyCommentInfo (params) {
    return fetchGet('/api/strategy/strategyComment/strategyComment_list_info', params)
  },
  getStrategyAddCount (params) {
    return fetchGet('/api/strategy/strategyAddCount/strategyAddCount', params)
  },
  postAddStrategtCmt (data) {
    return fetchPost('/api/strategy/strategyComment/addStrategtCmt', data)
  }
}
