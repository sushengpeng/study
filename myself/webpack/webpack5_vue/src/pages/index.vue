<template>
  <div class="outer">
    <div class="content">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>
  </div>
</template>

<script>
import { Button } from 'element-ui';
export default {
  data() {
    return {
      activeIndex: "0"
    }
  },
  components: {
    [Button.name]: Button,
  },
  methods: {
    handleSelect() { }
  }
}
</script>

<style lang="less" scoped>
.outer {
  width: 100%;
  display: flex;
  box-sizing: content-box;
  padding: 10px;
  .content {
    width: 100%;
    border-radius: 20px;
    background: #f6f7f7;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    .block{
      float: left;
      width: 200px;
      height: 300px;
      background: red;
      margin-left: 20px;
      margin-top: 20px;
    }
  }
  .content::-webkit-scrollbar {
    display: none;
  }
}
</style>vue