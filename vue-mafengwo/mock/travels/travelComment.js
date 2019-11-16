import travelCommentList from '../json/travelComment'
import { getUrlParam, selectPLList } from '@/utils/common'

const travelComment = {
  url: /\/api\/travels\/travelComment\/travelComment_info_list/,
  type: 'get',
  response: options => {
    let { travelInfo, query } = getUrlParam(options.url)
    let { page, limit } = query
    let total = travelCommentList.length
    let travelComment = selectPLList(travelCommentList, page, limit)
    console.log(options, travelInfo, query)
    return {
      code: 200,
      data: {
        travelComment,
        page,
        total,
        limit
      }
    }
  }
}

export default travelComment
