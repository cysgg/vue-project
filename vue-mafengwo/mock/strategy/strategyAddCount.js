import strategyInfoData from '../json/strategyInfo'
import { getUrlParam } from '@/utils/common'

const strategyAddCount = {
  url: /\/api\/strategy\/strategyAddCount\/strategyAddCount/,
  type: 'get',
  response: options => {
    console.log(options)
    let { query } = getUrlParam(options.url)
    let { name } = query
    strategyInfoData.btnMap[name]++
    strategyInfoData.hasActive[name] = true
    console.log(name)
    return {
      code: 200,
      data: {
        msg: 'success'
      }
    }
  }
}

export default strategyAddCount
