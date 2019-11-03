import { fetchGet } from './config'

export default {
  getZtzsInfo () {
    return fetchGet('/api/djd/ztzs/ztzs_info_list')
  },
  getTjjdInfo () {
    return fetchGet('/api/djd/tjjd/tjjd_info_list')
  },
  getInputPopInfo () {
    return fetchGet('/api/djd/inputPop/inputPop_info_list')
  },
  getInputTipsInfo (params) {
    return fetchGet('/api/djd/inputTips/inputTips_info_list', params)
  }
}
