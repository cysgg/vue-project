import Vue from 'vue'
import Router from 'vue-router'

const __loadView__ = filename => () => import(`@/views/${filename}.vue`)

Vue.use(Router)

/**
 * router meta 属性解释
 * keepAlive 跳到其他路由时，是否保持原有的加载和显示状态
 * headerOpacity 跳到一个路由时是否，header是否透明，
 * 当header下是一个大图时，推荐headerOpacity: ture
 */

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: __loadView__('home'),
      meta: {
        keepAlive: false,
        headerOpacity: true
      }
    }, {
      path: '/mdd',
      name: 'mdd',
      component: __loadView__('mdd'),
      meta: {
        keepAlive: false,
        headerOpacity: true
      }
    }
  ]
})
