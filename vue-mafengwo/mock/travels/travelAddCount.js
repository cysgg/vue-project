import travelInfo from '../json/travelInfo'

const travelAddCount = {
  url: /\/api\/travels\/travelAddCount\/travelAddCount/,
  type: 'get',
  response: options => {
    console.log(options)
    travelInfo.likeCount++
    travelInfo.hasLiked = true
    console.log(travelInfo.likeCount)
    return {
      code: 200,
      data: {
        msg: 'success'
      }
    }
  }
}

export default travelAddCount
