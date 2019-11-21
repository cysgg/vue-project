import strategyCommentList from '../json/strategyComment'
import { getNowTimeStr } from '@/utils/common'

const addStrategtCmt = {
  url: /\/api\/strategy\/strategyComment\/addStrategtCmt/,
  type: 'post',
  response: options => {
    let { cmtInfo } = JSON.parse(options.body)
    console.log(cmtInfo)
    cmtInfo.id = strategyCommentList.length + 1
    cmtInfo.cmtTime = getNowTimeStr('dateTime')
    strategyCommentList.unshift(cmtInfo)
    return {
      code: 200,
      data: {
        msg: 'success'
      }
    }
  }
}

export default addStrategtCmt
