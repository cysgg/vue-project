import Vue from 'vue'
import Vuex from 'vuex'

import lygl from './modules/lygl'
import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lygl,
    login
  }
})
