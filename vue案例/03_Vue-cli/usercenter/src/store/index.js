import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [],
    usersLoading: false,
    total: 0,
    params: {
      page: 1,
      pagesize: 10,
      name: ''
    }
  },
  mutations: {
    setUsers (state, users) {
      state.users = users
    },
    setTotal (state, total) {
      state.total = total
    },
    setUsersLoading (state, status) {
      state.usersLoading = status
    },
    setParams (state, params) {
      // {page: 2} {name: '张三'}
      state.params = params
    },
    removeUser (state, index) {
      state.users.splice(index, 1)
    },
    editUser (state, user) {
      const id = user.id
      // 根据id找到对应的用户
      let u = state.users.find(user => user.id === id)
      Object.assign(u, user)
    }
  },
  actions: {
    getUsers ({commit, state}) {
      commit('setUsersLoading', true)
      return Vue.axios.get('/user/listpage', {
        params: state.params
      }).then(res => {
        // 请求到之后 设置users为res.data.users.users
        commit('setUsers', res.data.users.users)
        commit('setTotal', res.data.users.total)
        commit('setUsersLoading', false)
      })
    },
    getParams ({dispatch, commit, state}, params) {
      const p = {...state.params, ...params}
      commit('setParams', p)
      // action中可以继续分发action
      dispatch('getUsers')
    },
    removeUser ({commit}, {index, id}) {
      // 拿着id去接口处删除后台接口
      commit('setUsersLoading', true)
      
      return Vue.axios.get('/user/remove', {
        params: {
          id
        }
      }).then(res => {
        if (res.status === 200) {
          // 拿着index去mutation删除前台数据
          commit('removeUser', index)

        }
        commit('setUsersLoading', false)
      })
    },
    removeUsers ({commit, state}, ids) {
      // 拿着ids调用接口
      return Vue.axios.get('user/batchremove', {
        params: {
          ids
        }
      }).then(res => {
        if (res.data.code === 200) {
          const users = state.users.filter(user => {
            // 判断user.id是否在ids
            return !(ids.indexOf(user.id) > -1)
          })
          commit('setUsers', users)
        }
      })
    },
    editUser ({commit}, user) {
      Vue.axios.get('/user/edit', {
        params: user
      }).then(() => {
        console.log('chenggong')
        commit('editUser', user)
      })
    }
  }
})

export default store