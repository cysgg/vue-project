import Vue from 'vue'
import Router from 'vue-router'

const __loadView__ = filename => () => import(`@/views/${filename}.vue`)
const __loadChildCom__ = (dir, filename) => () => import(`components/${dir}/${filename}.vue`)

Vue.use(Router)

/**
 * router meta 属性解释
 * keepAlive 跳到其他路由时，是否保持原有的加载和显示状态
 * headerOpacity 跳到一个路由时是否，header是否透明，
 * 当header下是一个大图时，推荐headerOpacity: ture
 */

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},

    {path: '/home', name: 'home', component: __loadView__('home'), meta: {keepAlive: false, headerOpacity: true}},

    {path: '/mdd', name: 'mdd', component: __loadView__('mdd'), meta: {keepAlive: false, headerOpacity: true}},

    {
      path: '/gonglve',
      component: __loadView__('lygl'),
      children: [
        {path: '', name: 'gonglve', redirect: 'lyglIndex'},
        {path: 'lyglIndex', name: 'lyglIndex', component: __loadChildCom__('lygl', 'lyglIndex'), meta: {keepAlive: false, headerOpacity: false}},
        {path: 'lyglItem/:name', name: 'lyglItem', component: __loadChildCom__('lygl', 'lyglItem'), meta: {keepAlive: false, headerOpacity: false}}
      ]
    },

    {path: '/llzm', name: 'llzm', component: __loadView__('llzm'), meta: {keepAlive: false, headerOpacity: true}},

    {
      path: '/djd',
      component: __loadView__('djd'),
      children: [
        {path: '', name: 'djd', redirect: 'djdIndex'},
        {path: 'djdIndex', name: 'djdIndex', component: __loadChildCom__('djd', 'djdIndex'), meta: {keepAlive: false, headerOpacity: false}},
        {path: 'hotelMdd', name: 'hotelMdd', component: __loadChildCom__('djd', 'hotelMdd'), meta: {keepAlive: false, headerOpacity: false}}
      ]
    }
  ]
})
