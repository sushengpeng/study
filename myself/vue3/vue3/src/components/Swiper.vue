<template>
  <div class="topBanner" :style="{background:`url(${state.backgound_img}) no-repeat`}">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :loop="true" @change="bannerChange">
      <van-swipe-item v-for="(item,index) in state.topBanner" :key="index">
        <img :src="item.banner_img" alt="">
      </van-swipe-item>
    </van-swipe>
    <van-swipe vertical class="userActive" :autoplay="2000" :loop="true">
      <van-swipe-item v-for="(item,index) in state.userActiveList" :key="index" class="userItem">
        <img :src="item.wx_headimg" alt="">
        <span>{{item.wx_nickname.slice(0,4)}}</span>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { computed, nextTick, onMounted, reactive, ref, watch } from 'vue';
import { getBanner, getUserActive } from '@/api/index'
import { Swipe, SwipeItem } from 'vant';
export default {
  setup() {
    let state = reactive({
      topBanner: [],
      nowIndex: null,
      backgound_img: "",
      userActiveList: []
    })
    getUserActive().then(res => {
      state.userActiveList = res.data
      console.log(state)
    })
    getBannerList()
    async function getBannerList() {
      let { data } = await getBanner();
      console.log(data)
      state.topBanner = data
      state.nowIndex = 0
      state.backgound_img = state.topBanner[state.nowIndex].banner_backimg
    }
    let dom = document.getElementsByClassName('van-swipe__track')[1]
    watch(()=>dom, (val, oldval) => {
      console.log(val, oldval)
    })
    nextTick(()=>{
      console.log(1111)
    })
    function bannerChange(index) {
      state.nowIndex = index
      state.backgound_img = state.topBanner[state.nowIndex].banner_backimg
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
  background-size: 100% 100% !important;
  overflow: hidden;
  position: relative;
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
.userActive {
  height: 50px;
  width: 200px;
  overflow: hidden;
  border-radius: 50px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 80px;
  left: 30px;
  .van-swipe-item {
    width: 100%;
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      top: 0;
    }
    span {
      flex: 1;
      margin-left: 20px;
      color: #fff;
      font-size: 24px;
    }
  }
}
</style>