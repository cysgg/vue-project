import travelContentList from '../json/travelContent'
import { getUrlParam } from '@/utils/common'

const travelContent = {
  url: /\/api\/travels\/travelContent\/travelContent_info_list/,
  type: 'get',
  response: options => {
    let { travelInfo, query } = getUrlParam(options.url)
    let page = parseInt(query.page, 10)
    let total = travelContentList.length
    let travelContent = travelContentList[page - 1]
    console.log(options, travelInfo, query)
    return {
      code: 200,
      data: {
        travelContent,
        page,
        total
      }
    }
  }
}

export default travelContent
