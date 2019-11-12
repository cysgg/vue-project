import Mock from 'mockjs'
import header from './header/index'
import home from './home/index'
import mdd from './mdd/index'
import lygl from './lygl/index'
import llzm from './llzm/index'
import djd from './djd/index'
import travels from './travels/index'

// 延时200-600毫秒请求到数据
Mock.setup({
  timeout: '200-600'
})

const mocks = [
  ...header,
  ...home,
  ...mdd,
  ...lygl,
  ...llzm,
  ...djd,
  ...travels
]

mocks.forEach(route => {
  Mock.mock(route.url, route.type, route.response)
})
