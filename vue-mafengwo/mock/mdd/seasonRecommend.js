import seasonRecommendList from '../json/seasonRecommend'

const seasonRecommend = {
  url: /\/api\/mdd\/seasonRecommend\/seasonRecommend_info_list/,
  type: 'get',
  response: {
    code: 200,
    data: {
      seasonRecommendList
    }
  }
}

export default seasonRecommend
