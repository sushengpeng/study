import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    routerRequest: {}
  },
  mutations: {
    addRequest(state, value) {
      const { path } = value
      if (!state.routerRequest[path]) {
        state.routerRequest[path] = [value]
      } else {
        state.routerRequest[path].push(value)
      }
    },
    delRequest(state,path){
      if(state.routerRequest[path]){
        state.routerRequest[path].map(item=>{
          console.log(item);
          item.source.cancel("cancel")
        })
      }
    }
  },
  actions: {
  },
})
