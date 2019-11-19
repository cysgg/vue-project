import strategyCommentList from '../json/strategyComment'
import { getUrlParam, selectPLList } from '@/utils/common'

const strategyComment = {
  url: /\/api\/strategy\/strategyComment\/strategyComment_list_info/,
  type: 'get',
  response: options => {
    let { strategyInfo, query } = getUrlParam(options.url)
    let { page, limit } = query
    let total = strategyCommentList.length
    let strategyCommentListMock = selectPLList(strategyCommentList, page, limit)
    console.log(options, strategyInfo, query)
    return {
      code: 200,
      data: {
        strategyCommentList: strategyCommentListMock,
        page,
        total,
        limit
      }
    }
  }
}

export default strategyComment
