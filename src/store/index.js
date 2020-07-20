import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
// import { state, mutations, actions } from './modules/user'   It's a mistake

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: user.actions, // users' operation
  state: user.state, // users' identify
  mutations: user.mutations, // users' identify change
  getters // 如果有多个组件需要用到此属性，我们要么复制这个函数，或者抽取到一个共享函数然后在多处导入它——无论哪种方式都不是很理想。
  // Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

})
