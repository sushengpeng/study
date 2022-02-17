<template>
  <div id="app">
    <Bar />
    <router-view />
  </div>
</template>

<script>
import Bar from "@/components/Bar"
export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    Bar
  },
  created() {
    // console.log(111)
  },
};
</script>

<style lang="less" scoped>
html,
body,
#app {
  height: 100%;
  width: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
</style>
