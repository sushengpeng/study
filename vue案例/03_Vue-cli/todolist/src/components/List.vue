<template>
  <ul>
    <li 
      v-for="(todo, index) in todos" 
      :key="index"
      @click="changeStatus(index)"
    >{{todo.content}} <span v-if="todo.done">- 已完成</span></li>
  </ul>
</template>

<script>
export default {
  props: {
    todos: Array
  },
  methods: {
    changeStatus (index) {
      this.$store.dispatch('getIndex', index)
    }
  }
}
</script>

<style>

</style>
