<template>
  <div class="topBanner" :style="{background:`url(${state.backgound_img}) no-repeat`}">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :loop="true" @change="bannerChange">
      <van-swipe-item v-for="(item,index) in state.topBanner" :key="index">
        <img :src="item.banner_img" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from 'vue';
import { getBanner } from '@/api/index'
import { Swipe, SwipeItem } from 'vant';
export default {
  setup() {
    let state = reactive({
      topBanner: [],
      nowIndex: null,
      backgound_img: ""
    })
    getBannerList()
    async function getBannerList() {
      let { data } = await getBanner();
      console.log(data)
      state.topBanner = data
      state.nowIndex = 0
      state.backgound_img = state.topBanner[state.nowIndex].banner_backimg
    }
    function bannerChange(index) {
      state.nowIndex = index
      state.backgound_img = state.topBanner[state.nowIndex].banner_backimg
      console.log(state.banner_backimg)
    }
    return {
      state,
      bannerChange
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
}
</script>

<style lang="less" scoped>
.topBanner {
  height: 340px;
  background-size: 100% 100%!important;
  overflow: hidden;
}
.van-swipe {
  overflow: initial;
}
.van-swipe-item {
  display: flex;
  justify-content: center;
  img {
    width: 92%;
    position: relative;
    box-shadow: 0px 1px 1px #999;
    top: 80px;
  }
}
</style>