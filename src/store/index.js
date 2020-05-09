import Vue from 'vue'
import Vuex from 'vuex'
import actions from './user'
// import { state, mutations, actions } from './modules/user'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  // modules: {},
  // modules: {
  //   state: state,
  //   mutations: mutations,
  //   actions: actions
  // },
  getters

})
