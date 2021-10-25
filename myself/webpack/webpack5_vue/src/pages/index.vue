<template>
  <div class="outer">
    <div class="content">
      <el-button>默认按钮</el-button>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item
          index="3"
          disabled
        >消息中心</el-menu-item>
        <el-menu-item index="4"><a
            href="https://www.ele.me"
            target="_blank"
          >订单管理</a></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { Button, Menu, MenuItem, Submenu } from 'element-ui';
export default {
  data() {
    return {
      activeIndex: "0"
    }
  },
  components: {
    [Button.name]: Button,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [Submenu.name]: Submenu
  },
  methods:{
    handleSelect(){}
  }
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
