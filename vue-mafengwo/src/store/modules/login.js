import { SET_LOGIN_USER_INFO, SET_LOGIN_TOKEN } from '../typeMutations'

const state = {
  token: '',
  userInfo: {}
}

const getters = {
  userInfo ({userInfo}) {
    return userInfo
  }
}

const mutations = {
  [SET_LOGIN_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [SET_LOGIN_TOKEN] (state, token) {
    state.token = token
  }
}

const actions = {
  getUserInfo ({commit}, userInfo) {
    commit(SET_LOGIN_USER_INFO, userInfo)
  },
  getLoginToken ({commit}, token) {
    commit(SET_LOGIN_TOKEN, token)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
