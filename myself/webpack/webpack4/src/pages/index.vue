<template>
  <div class="outer">
    <div class="content">
      <img src="@/assets/img/img_renlian.png"/> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  components: {
  },
}
</script>

<style lang="less" scoped>
.outer {
  background: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .content::-webkit-scrollbar {
    display: none;
  }
}
</style>