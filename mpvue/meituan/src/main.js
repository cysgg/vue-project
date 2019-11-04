import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: [
      '^pages/index/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '高仿美团',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      borderStyle: 'white',
      backgroundColor: '#fff',
      selectedColor: '#06c1ae',
      color: '#666',
      list: [{
        pagePath: 'pages/index/main',
        iconPath: 'static/images/tab1.png',
        selectedIconPath: 'static/images/tab1-s.png',
        text: '首页'
      }, {
        pagePath: 'pages/orderList/main',
        selectedIconPath: 'static/images/tab2-s.png',
        iconPath: 'static/images/tab2.png',
        text: '订单'
      }, {
        pagePath: 'pages/self/main',
        selectedIconPath: 'static/images/tab3-s.png',
        iconPath: 'static/images/tab3.png',
        text: '我的'
      }]
    }
  }
}
