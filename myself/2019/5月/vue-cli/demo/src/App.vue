<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <topbar></topbar>
    <v_main v-cloak></v_main> 
  </div>
</template>

<script>
import topbar from './components/topbar'
import v_main from './components/v_main'
export default {
  name:'App',
  components:{
    topbar,v_main
  }
}
</script>

<style>
body{
    background-color: #e1e1e1;
}
[v-cloak]{
    display: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.clearfix{
  content:'.';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>
