<template>
  <!-- <div id="nav">
    <router-link>Home</router-link> |
  </div> -->
  <router-view />
  <Bar></Bar>
</template>
<script>
import Bar from "@/components/Bar"
export default {
  components: {
    Bar
  },
  setup() {

  }
}
</script>
<style lang="less">
#app {
  background: #fff;
  color: #111111;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .outer {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .outer::-webkit-scrollbar {
    display: none;
  }
}
</style>
