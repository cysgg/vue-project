// import Vue from 'vue'
import axios from 'axios'

// const vue = new Vue()

// axios的配置
axios.defaults.timeout = 10000// 默认请求时长
axios.defaults.baseURL = 'http://localhost:3000'

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

// ajax请求统一增加请求头
axios.interceptors.request.use(config => {
  config.headers.common = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
    'Authentication-Token': sessionStorage.getItem('token')
  }
  // config.timeout = 3600*24*7;
  config.timeout = 10000
  return config
})

export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(response => {
      resolve(response.data.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function fetchPost (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(response => {
      resolve(response.data.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}
