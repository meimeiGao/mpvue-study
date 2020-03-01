import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js'
import mutations from './mutations.js'
import getters from './getter.js'
import actions from './actions.js'
//声明使用vuex
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
