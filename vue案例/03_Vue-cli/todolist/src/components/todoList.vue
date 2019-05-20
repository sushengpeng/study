<template>
  <div class="todo-list">
    <todoInput></todoInput>    
    <List :todos="todos"></List>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import List from './List'
import todoInput from './Input'
export default {
  components: {
    List, todoInput
  },
  computed: {
    /* todos () {
      return this.$store.state.todos
    } */
    ...mapState(['todos'])
  }
}
</script>

<style>

</style>
