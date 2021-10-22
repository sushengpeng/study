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
  },
};
</script>

<style lang="less" scoped>
#app {
  height: 100vh;
  width: 100%;
}
#app {
  display: flex;
  flex-direction: row;
  background: #0f123f;
}
.leftBar {
  height: 100%;
}
.content {
  height: 100%;
}
</style>
