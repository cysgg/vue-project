import userInfoMap from '../json/userInfoMap'
const userInfo = {
  url: /\/api\/login\/userInfo\/userInfo_info/,
  type: 'post',
  response: options => {
    console.log(options)
    let {name, password} = JSON.parse(options.body)
    let logined = false
    let msg = ''
    if (name in userInfoMap) {
      if (password === userInfoMap[name].password) {
        logined = true
        msg = '登录成功'
      } else {
        msg = '密码错误'
      }
    } else {
      msg = '用户名不正确'
    }
    let data = {
      logined,
      msg
    }
    if (logined) {
      data.userInfo = userInfoMap[name].userInfo
      data.token = userInfoMap[name].name + userInfoMap[name].userInfo.level
    }
    return {
      code: 200,
      data
    }
  }
}

export default userInfo
