import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// const todosName = 'todosList'
import { STORAGE_KEY } from './config'

export default new Vuex.Store({
  state: {
    todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  mutations: {
    pushTodoToTodos (state, todo) {
      state.todos.push(todo)
      // 都需要把最新的state.todos存储到localStorage
      // localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    changeTodoStatus (state, index) {
      state.todos[index].done = !state.todos[index].done
      // localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  },
  actions: {
    getContent ({commit}, content) {
      // 获取到content之后生成对象 {content: '', done: false}并且提交给mutation
      commit('pushTodoToTodos', {content, done: false})
    },
    getIndex ({commit}, index) {
      commit('changeTodoStatus', index)
    } 
  },
  plugins: [
    (store) => {
      store.subscribe((mutations, {todos}) => {
        // 每次 mutation 之后调用
        // mutation 的格式为 { type, payload }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))

      })
    }
  ]
})