import Vue from 'vue'
import Vuex from 'vuex'

import lygl from './modules/lygl'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lygl
  }
})
