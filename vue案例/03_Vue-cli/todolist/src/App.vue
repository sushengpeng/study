<template>
  <div id="app">
    <todoList></todoList>
  </div>
</template>

<script>
import todoList from './components/todoList'
export default {
  name: 'app',
  components: {
    todoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
