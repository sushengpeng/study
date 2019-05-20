import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

const state = {}
const mutations = {}
const actions = {}
const modules = {
  cart, products
}

export default new Vuex.Store({
  state, mutations, actions, modules
})