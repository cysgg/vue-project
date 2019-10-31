import api from '@/api/index'
import { SET_LYGL_MDD_INFO } from '../typeMutations'

const state = {
  lyglMddList: [],
  total: 0
}

const getters = {
  lyglMddList ({lyglMddList}) {
    return lyglMddList
  },
  total ({total}) {
    return total
  }
}

const mutations = {
  [SET_LYGL_MDD_INFO] (state, data) {
    state.lyglMddList = data.lyglmapList
    state.total = data.total
  }
}

const actions = {
  async getApiLyglMddInfo ({commit}) {
    let res = await api.getLyglmapInfo()
    commit(SET_LYGL_MDD_INFO, res)
  },
  getLyglMddList ({state, dispatch}) {
    if (state.lyglMddList.length === 0) {
      dispatch('getApiLyglMddInfo')
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
