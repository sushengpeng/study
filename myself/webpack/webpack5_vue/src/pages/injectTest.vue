<template>
  <div class="injectTest">
    {{foo1}}
    <injectTestChild1 />
  </div>
</template>

<script>
import injectTestChild1 from "./injectTestChild1.vue"
export default {
  name: "injectTest",
  data() {
    return {
    }
  },
  inject: ['foo1'],
  components: {
    injectTestChild1
  },
}
</script>

<style lang="less" scoped>
.injectTest {
}
</style>