<template>
  <footer class="bar">
    <ul class="barList">
      <li v-for="(item,key) in barList" :key="key" @click="barChange(item,key)">
        <img :src="baseUrl+item.active" alt="" v-if="key===index">
        <img :src="baseUrl+item.normal" alt="" v-else>
        <span :style="{color:key===index?'#E2141E':'rgb(34, 34, 34)'}">{{item.text}}</span>
      </li>
    </ul>
  </footer>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const baseUrl = process.env.VUE_APP_IMGURL
    const barList = [
      {
        normal: "/src/images/home/index2.png",
        active: "/src/images/home/index.png",
        text: "首页"
      },
      {
        normal: "/src/images/home/classify2.png",
        active: "/src/images/home/classify.png",
        text: "分类"
      },
      {
        normal: "/src/images/home/discovery2.png",
        active: "/src/images/home/discovery.png",
        text: "发现"
      },
      {
        normal: "/src/images/home/buycar2.png",
        active: "/src/images/home/buycar.png",
        text: "购物车"
      },
      {
        normal: "/src/images/home/mine2.png",
        active: "/src/images/home/mine.png",
        text: "我的"
      },
    ]
    let index = ref(0)

    return {
      barList,
      index,
      baseUrl
    }
  },
  methods: {
    barChange(item, index) {
      // console.log(index)
      this.index = index
    }
  }
}
</script>

<style lang="less" scoped>
.barList {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px 40px 0;
  background: #fff;
  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 52px;
    }
    span {
      margin-top: 10px;
    }
  }
}
</style>