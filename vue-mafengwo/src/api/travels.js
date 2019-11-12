import { fetchGet } from './config'

export default {
  getTravelContentInfo (params) {
    return fetchGet('/api/travels/travelContent/travelContent_info_list', params)
  },
  getTravelInfo (params) {
    return fetchGet('/api/travels/travelInfo/travelInfo_info', params)
  }
}
