import Vue from 'vue'
import Router from 'vue-router'
import homeContext from '../components/homeContext.vue'
import memberContext from '../components/memberContext'
import shopcarContext from '../components/shopcarContext'
import searchContext from '../components/searchContext'
import NewsList from '../components/news/NewsList'
import NewsInfo from '../components/news/NewsInfo'
import photosInfo from '../components/photos/photosInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {path : "/",redirect:'home'},
    {path : "/home",component:homeContext},
    {path : "/member",component:memberContext},
    {path : "/shopcar",component:shopcarContext},
    {path : "/search",component:searchContext},
    {path : "/home/newslist",component:NewsList},
    {path : "/home/newslist/newsinfo/:id",component:NewsInfo},
    {path : "/home/photolist",component:photosInfo}
  ],
  linkActiveClass: 'mui-active'
})
