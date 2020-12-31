<template>
  <div class="app_down">
    <van-icon :name="setUrl('src/images/home/_close.png')" size="20"/>
    <img :src="setUrl('src/images/home/login.png')" alt="">
    <div class="centerText">
      <p>下载 “麦朵商城” APP客户端</p>
      <p class="marginTop10">豪礼不停、惊喜不断!</p>
    </div>
    <van-button color="#e2141e">立即下载</van-button>
  </div>
</template>

<script>
import { Button, Icon } from 'vant';
import { setUrl } from '@/tools/tools.js'
export default {
  setup() {
    return {
      setUrl
    }
  },
  components: {
    [Icon.name]: Icon,
  }
}
</script>

<style lang="less">
.app_down {
  background: #f2f2f2;
  height: 50Px;
  display: flex;
  align-items: center;
  padding-right: 40px;
  img{
    width: 70px;
  }
  .centerText{
    flex: 1;
    padding-left: 20px;
    .marginTop10{
      margin-top: 10px;
    }
  }
  .van-button{
    height: 60px;
    border-radius: 6px;
  }
}
</style>