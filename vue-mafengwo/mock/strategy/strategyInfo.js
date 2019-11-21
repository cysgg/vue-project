import strategyInfoData from '../json/strategyInfo'

const strategyInfo = {
  url: /\/api\/strategy\/strategyInfo\/strategyInfo_info/,
  type: 'get',
  response: options => {
    console.log(options)
    return {
      code: 200,
      data: {
        strategyInfo: strategyInfoData
      }
    }
  }
}

export default strategyInfo
