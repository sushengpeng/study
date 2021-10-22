<template>
  <div id="app">
    <Bar />
    <router-view />
  </div>
</template>
<script>
import Bar from "@/components/Bar.vue"
export default {
  name: "App",
  components: {
    Bar
  },
  data() {
    return {};
  },
  created() {
  }
};
</script>

<style lang="less">
#app {
  height: 100%;
}
</style>