import pro from '../api'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProjects: state => state.all
}

// actions
const actions = {
  getAllProjects ({ commit }) {
    var daa = pro.projectList().data;
    alert(daa);
    commit(types.SELECT_SUCCESS,pro.projectList())
   

  }
}

// mutations
const mutations = {
  [types.SELECT_SUCCESS] (state, { projectList }) {
    state.all = projectList
  }/*,

  [types.SELECT_FAILURE] (state) {
      state.all = null
  }*/
}

export default {
  state,
  getters,
  actions,
  mutations
}
