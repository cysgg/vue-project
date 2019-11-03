import inputTipsList from '../json/inputTips'

const inputTips = {
  url: /\/api\/djd\/inputTips\/inputTips_info_list/,
  type: 'get',
  response: params => {
    console.log(params)
    return {
      code: 200,
      data: {
        inputTipsList
      }
    }
  }
}

export default inputTips