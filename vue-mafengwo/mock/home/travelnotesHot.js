import { getUrlParam } from '@/utils/common.js'
import travelnotesList from '../json/travelnoteHot'
import Mock from 'mockjs'

const travelnotesHot = {
  url: /\/api\/home\/travelnotes\/travelnotesHot_info_list/,
  type: 'get',
  response: options => {
    let {page, limit} = getUrlParam(options.url)
    let start = (page - 1) * limit
    let end = page * limit
    let travelnotesMock = travelnotesList.slice(start, end)
    let total = travelnotesList.length
    return Mock.mock({
      code: 200,
      data: {
        page,
        total,
        limit,
        travelnotes: travelnotesMock
      }
    })
  }
}

export default travelnotesHot
