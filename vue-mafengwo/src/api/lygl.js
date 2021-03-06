import { fetchGet } from './config'

export default {
  getGldhInfo () {
    return fetchGet('/api/lygl/gldh/gldh_info_list')
  },
  getGlSliderInfo () {
    return fetchGet('/api/lygl/glSlider/glSlider_info_list')
  },
  getTjglInfo (params) {
    return fetchGet('/api/lygl/tjgl/tjgl_info_list', params)
  },
  getRankInfo () {
    return fetchGet('/api/lygl/rank/rank_info_list')
  },
  getLyglmapInfo () {
    return fetchGet('/api/lygl/lyglmap/lyglmap_info_list')
  },
  getLyglItemInfo (params) {
    return fetchGet('/api/lygl/lyglItem/lyglItem_info_list', params)
  }
}
