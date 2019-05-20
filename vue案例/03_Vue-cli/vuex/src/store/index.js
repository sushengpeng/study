import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入state

import state from './state'
import mutations from './mutations'
import actions from './actions'


const store = new Vuex.Store({
  state, mutations, actions
  /* state: state, 
  mutations: mutations, 
  actions: actions */
})

export default store