import travelnotesList from '../json/travelnoteHot'
import { getUrlParam, selectPLList } from '@/utils/common.js'
import Mock from 'mockjs'

const travelnotesHot = {
  url: /\/api\/home\/travelnotes\/travelnotesHot_info_list/,
  type: 'get',
  response: options => {
    console.log(options, '+++++++++++')
    let {page, limit} = getUrlParam(options.url)
    console.log(page, limit, '==================')
    let travelnotesMock = selectPLList(travelnotesList, page, limit)
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
