import strategyContent from '../json/strategyContent'

const strategyContentWrap = {
  url: /\/api\/strategy\/strategyContent\/strategyContent_info/,
  type: 'get',
  response: options => {
    console.log(options)
    return {
      code: 200,
      data: {
        strategyContent: strategyContent
      }
    }
  }
}

export default strategyContentWrap
