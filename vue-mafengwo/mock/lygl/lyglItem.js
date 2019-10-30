import mppList from '../json/mddList'
import { getUrlParam } from '@/utils/common.js'

const lyglItem = {
  url: /\/api\/lygl\/lyglItem\/lyglItem_info_list/,
  type: 'get',
  response: options => {
    let { name } = getUrlParam(decodeURIComponent(options.url))
    let lyglItemList = []
    for (let i = 0; i < mppList.length; i++) {
      for (let j = 0; j < mppList[i].typeList.length; j++) {
        if (mppList[i].typeList[j].li_text === name) {
          lyglItemList = mppList[i].typeList[j].gl_list
          break
        }
      }
      if (lyglItemList.length > 0) {
        break
      }
    }
    return {
      code: 200,
      data: {
        lyglItemList
      }
    }
  }
}
export default lyglItem