import Mock from 'mockjs'
import home from './home/index'

// 延时200-600毫秒请求到数据
Mock.setup({
  timeout: '200-600'
})

const mocks = [
  ...home
]

mocks.forEach(route => {
  Mock.mock(route.url, route.type, route.response)
})
