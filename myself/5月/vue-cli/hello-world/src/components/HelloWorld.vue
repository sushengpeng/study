<template>
  <div class="home">
    <topbar></topbar>
    <v_main v-cloak></v_main> 
  </div>
</template>

<script>
import topbar from '../components/topbar'
import v_main from '../components/v_main'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    topbar,v_main
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
[v-cloak]{
    display: none;
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
