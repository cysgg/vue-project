// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Cell, Header } from 'mint-ui'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import '../lib/css/mui.min.css'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Cell)
Vue.component(Header.name, Header);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
