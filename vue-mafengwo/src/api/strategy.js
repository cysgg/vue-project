import { fetchGet } from './config'

export default {
  getStrategyInfo (params) {
    return fetchGet('/api/strategy/strategyInfo/strategyInfo_info', params)
  },
  getStrategyContentInfo (params) {
    return fetchGet('/api/strategy/strategyContent/strategyContent_info', params)
  },
  getStrategyCommentInfo (params) {
    return fetchGet('/api/strategy/strategyComment/strategyComment_list_info', params)
  }
}
