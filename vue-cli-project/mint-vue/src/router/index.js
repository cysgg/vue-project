import Vue from 'vue'
import Router from 'vue-router'
import homeContext from '../components/homeContext.vue'
import memberContext from '../components/memberContext'
import shopcarContext from '../components/shopcarContext'
import searchContext from '../components/searchContext'

Vue.use(Router)

export default new Router({
  routes: [
    {path : "/home",component:homeContext},
    {path : "/member",component:memberContext},
    {path : "/shopcar",component:shopcarContext},
    {path : "/search",component:searchContext}
  ],
  linkActiveClass: 'mui-active'
})
