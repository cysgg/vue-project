const header = {
  url: /\/api\/home\/header\/tab_list_info/,
  type: 'get',
  response: {
    code: 200,
    data: {
      tablist: [{
        value: '首页',
        path: '/home'
      },{
        value: '目的地',
        path: '/mdd'
      },{
        value: '旅游功略',
        path: '/gonglve'
      },{
        value: '去旅行',
        path: '/qlx'
      },{
        value: '机票',
        path: '/jp'
      },{
        value: '订酒店',
        path: '/djd'
      },{
        value: '社区',
        path: '/sq'
      },{
        value: 'APP',
        path: '/app'
      }]
    }
  }
}

export default header
