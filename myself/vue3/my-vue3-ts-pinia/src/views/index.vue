<!--
 * @Autor: flygg123
 * @Date: 2022-06-24 14:39:36
 * @LastEditTime: 2022-07-19 14:39:55
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
  <div class="outer">
    <div class="sideBar">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
  <router-view />
</template>
<script lang="ts" setup>
import { defineComponent, reactive, ref } from 'vue';
const count = ref(33333);
const router = useRouter();
const skip = () => {
  router.push({ path: '/about' });
};
</script>
<style lang="scss" scoped></style>
