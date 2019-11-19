import loginBgList from '../json/loginBgList'

const bgInfo = {
  url: /\/api\/login\/bgInfo\/bgInfo_info/,
  type: 'get',
  response: options => {
    console.log(options)
    return {
      code: 200,
      data: {
        bgInfo: loginBgList[Math.floor(Math.random() * loginBgList.length)]
      }
    }
  }
}

export default bgInfo
