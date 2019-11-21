import { SET_LOGIN_USER_INFO, SET_LOGIN_TOKEN, CLEAR_LOGIN_USER_INFO, CLEAR_LOGIN_TOLEN } from '../typeMutations'

const state = {
  token: '',
  userInfo: null
}

const getters = {
  userInfo ({userInfo}) {
    return userInfo
  }
}

const mutations = {
  [SET_LOGIN_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
  },
  [CLEAR_LOGIN_USER_INFO] (state) {
    state.userInfo = null
    sessionStorage.removeItem('userInfo')
  },
  [SET_LOGIN_TOKEN] (state, token) {
    state.token = token
    sessionStorage.setItem('token', token)
  },
  [CLEAR_LOGIN_TOLEN] (state) {
    state.token = ''
    sessionStorage.removeItem('token')
  }
}

const actions = {
  getUserInfo ({commit}, userInfo) {
    commit(SET_LOGIN_USER_INFO, userInfo)
  },
  getLoginToken ({commit}, token) {
    commit(SET_LOGIN_TOKEN, token)
  },
  clearUserInfo ({commit}) {
    commit(CLEAR_LOGIN_USER_INFO)
    commit(CLEAR_LOGIN_TOLEN)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
