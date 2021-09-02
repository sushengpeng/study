<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    };
  },
  created() {
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
</style>
