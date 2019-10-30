import api from '@/api/index'
import { SET_LYGL_MDD_LIST } from '../typeMutations'

const state = {
  lyglMddList: []
}

const getters = {
  lyglMddList ({lyglMddList}) {
    return lyglMddList
  }
}

const mutations = {
  [SET_LYGL_MDD_LIST] (state, data) {
    state.lyglMddList = data
  }
}

const actions = {
  async getApiLyglMddList ({commit}) {
    let res = await api.getLyglmapInfo()
    commit(SET_LYGL_MDD_LIST, res.lyglmapList)
  },
  getLyglMddList ({state, dispatch}) {
    if (state.lyglMddList.length === 0) {
      dispatch('getApiLyglMddList')
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
