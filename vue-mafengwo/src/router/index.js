import Vue from 'vue'
import Router from 'vue-router'

const __loadView__ = filename => () => import(`@/views/${filename}.vue`)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: __loadView__('home')
    }
  ]
})
