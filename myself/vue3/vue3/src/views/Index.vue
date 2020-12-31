<template>
  <div class="outer">
    <AppDown></AppDown>
    <Swiper></Swiper>
    <CenterIcon></CenterIcon>
    <NewAdvert></NewAdvert>
  </div>
</template>

<script>
import AppDown from "@/components/AppDown"
import Swiper from "@/components/Swiper"
import CenterIcon from "@/components/CenterIcon"
import NewAdvert from "@/components/NewAdvert"
export default {
  setup() {

  },
  components: {
    AppDown,
    Swiper,
    CenterIcon,
    NewAdvert
  }
}
</script>

<style lang="less" scoped>
.van-swipe{
  height: 320px;
}
</style>