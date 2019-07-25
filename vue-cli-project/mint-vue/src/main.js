// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Cell, Header,Swipe, SwipeItem } from 'mint-ui'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import '../lib/css/mui.min.css'
import '../lib/css/icons-extra.css'
import moment from 'moment'
import VueResource from 'vue-resource'


Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Cell)
Vue.use(VueResource)
// Vue.http.options.root = '/root'; // 接口跟路径
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';


Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH-mm:ss"){
  return moment(dataStr).format(pattern)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
