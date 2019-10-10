// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import './styles/index.css'
import HeaderBar from './components/HeaderBar'
import FooterBar from './components/FooterBar'
import './rem'

Vue.config.productionTip = false

// function () {}
// {install: }
Vue.use((val) => {
  val.component('header-bar', HeaderBar)
  val.component('footer-bar', FooterBar)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
