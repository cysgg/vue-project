import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 懒加载
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/Layout/index')
    }
  ]
})
