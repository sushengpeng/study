import { defineStore } from "pinia";
export const userStore = defineStore('user', {
  state: () => {
    return {
      count: 1,
      arr: []
    }
  },
  getters: {},
  actions: {}
})
export const userStore1 = defineStore('user', {
  state: () => {
    return {
      count: 1,
      arr: []
    }
  },
  getters: {},
  actions: {}
})
