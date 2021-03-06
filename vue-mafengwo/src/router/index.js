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

    {path: '/home', name: 'home', component: __loadView__('home'), meta: {needHeaderOrFooter: true, keepAlive: false, headerOpacity: true}},

    {path: '/mdd', name: 'mdd', component: __loadView__('mdd'), meta: {needHeaderOrFooter: true, keepAlive: false, headerOpacity: true}},

    {
      path: '/gonglve',
      component: __loadView__('lygl'),
      children: [
        {path: '', name: 'gonglve', redirect: 'lyglIndex'},
        {path: 'lyglIndex', name: 'lyglIndex', component: __loadChildCom__('lygl', 'lyglIndex'), meta: {needHeaderOrFooter: true, keepAlive: false, headerOpacity: false}},
        {path: 'lyglItem/:name', name: 'lyglItem', component: __loadChildCom__('lygl', 'lyglItem'), meta: {needHeaderOrFooter: true, keepAlive: false, headerOpacity: false}}
      ]
    },

    {path: '/llzm', name: 'llzm', component: __loadView__('llzm'), meta: {needHeaderOrFooter: true, keepAlive: false, headerOpacity: true}},

    {
      path: '/djd',
      component: __loadView__('djd'),
      children: [
        {path: '', name: 'djd', redirect: 'djdIndex'},
        {path: 'djdIndex', name: 'djdIndex', component: __loadChildCom__('djd', 'djdIndex'), meta: {needHeaderOrFooter: true, keepAlive: false, headerOpacity: false}},
        {path: 'hotelMdd', name: 'hotelMdd', component: __loadChildCom__('djd', 'hotelMdd'), meta: {needHeaderOrFooter: true, keepAlive: false, headerOpacity: false}}
      ]
    },

    {path: '/travels', name: 'travels', component: __loadView__('travels'), meta: {needHeaderOrFooter: true, keepAlive: false, headerOpacity: true}},

    {path: '/strategy', name: 'strategy', component: __loadView__('strategy'), meta: {needHeaderOrFooter: true, keepAlive: false, headerOpacity: false}},

    {path: '/login', name: 'login', component: __loadView__('loginAndRegister'), meta: {needHeaderOrFooter: false, keepAlive: false, headerOpacity: true}},

    {path: '/register', name: 'register', component: __loadView__('loginAndRegister'), meta: {needHeaderOrFooter: false, keepAlive: false, headerOpacity: true}}

  ]
})
