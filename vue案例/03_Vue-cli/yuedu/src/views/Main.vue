<template>
  <div>
    <ydNav></ydNav>
    <keep-alive>
      <router-view :key="$route.path"></router-view>
    </keep-alive>
  </div>
</template>

<script>
// 引入导航
import ydNav from '../components/ydNav'
export default {
  components: {
    ydNav
  }
}
</script>

<style>

</style>
