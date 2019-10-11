import axios from 'axios'

// axios的配置
axios.defaults.timeout = 10000// 默认请求时长
axios.defaults.baseURL = 'https://www.xuexi.cn'

// 返回状态判断(响应拦截器)
axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) { // 服务器可以请求到
    alert('网络异常')
    return Promise.reject(res)
  }
  return res
}, (error) => { // 服务器宕机
  alert('网络异常')
  return Promise.reject(error)
})