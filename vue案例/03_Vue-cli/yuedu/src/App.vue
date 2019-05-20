<template>
  <div id="app">
    <router-view></router-view>
    <ydFooter></ydFooter>
  </div>
</template>

<script>
import ydFooter from './components/ydFooter'
export default {
  name: 'app',
  components: {
    ydFooter
  }
}
</script>

<style>
  body {
    background: rgb(245, 245, 245);
  }
</style>
