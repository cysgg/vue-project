import { fetchGet } from './config'

export default {
  getSliderListInfo () {
    return fetchGet('/api/home/slider/slider_info_list')
  },
  getTravelnotesHotInfo (params) {
    console.log(params, '+++++++')
    return fetchGet('/api/home/travelnotes/travelnotesHot_info_list', params)
  },
  getTravelnotesNewInfo (params) {
    return fetchGet('/api/home/travelnotes/travelnotesNew_info_list', params)
  },
  getTravellerInfo () {
    return fetchGet('/api/home/traveller/traveller_info_list')
  },
  getGonglveInfo () {
    return fetchGet('/api/home/gonglve/gonglve_info')
  },
  getActivityInfo () {
    return fetchGet('/api/home/activity/activity_info_list')
  },
  getLaboratoryInfo () {
    return fetchGet('/api/home/laboratory/laboratory_info')
  },
  getJoinmfwInfo () {
    return fetchGet('/api/home/joinmfw/joinmfw_info')
  },
  getMfwnewsInfo () {
    return fetchGet('/api/home/mfwnews/mfwnews_info_list')
  }
}
