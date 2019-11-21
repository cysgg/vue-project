import travelInfoData from '../json/travelInfo'

const travelInfo = {
  url: /\/api\/travels\/travelInfo\/travelInfo_info/,
  type: 'get',
  response: options => {
    console.log(options)
    return {
      code: 200,
      data: {
        travelInfo: travelInfoData
      }
    }
  }
}

export default travelInfo
