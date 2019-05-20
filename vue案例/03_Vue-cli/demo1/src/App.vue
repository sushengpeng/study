<template>
  <div id="app">
    <Com msg="从app.vue传递过去的数据"></Com>
  </div>
</template>


<script>
import Com from './components/Com.vue'

export default {
  components: {
    // Com: Com
    Com
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
