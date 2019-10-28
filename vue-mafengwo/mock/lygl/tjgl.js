import tjglList from '../json/tjgl'
import { getUrlParam, selectPLList } from '@/utils/common.js'

const tjgl = {
  url: /\/api\/lygl\/tjgl\/tjgl_info_list/,
  type: 'get',
  response: options => {
    let {page, limit} = getUrlParam(options.url)
    let tjglListMock = selectPLList(tjglList, page, limit)
    let total = tjglList.length
    return {
      code: 200,
      data: {
        tjglListMock,
        page,
        limit,
        total
      }
    }
  }
}

export default tjgl
