<template>
  <div class="injectTestChild1">
    {{foo3}}
  </div>
</template>

<script>
export default {
  name: "injectTestChild1",
  data() {
    return {
    }
  },
  inject:['foo3'],
  created(){
    // this.foo3 = '我修改了inject中的值'
  },
  components: {
  },
}
</script>

<style lang="less" scoped>
.injectTestChild1 {
}
</style>