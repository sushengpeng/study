<template>
  <div class="icon_list">
    <div class="icon_item" v-for="(item,index) in state.iconList" :key="index">
      <img class="icon" :src="item.banner_img" />
    </div>
  </div>
</template>

<script>
import { getIconList } from "@/api/index"
import { setUrl } from '@/tools/tools.js'
import { reactive } from 'vue'
export default {
  setup() {
    let state = reactive({
      iconList: []
    })
    getIconList().then(res => {
      state.iconList = res.data.banners
      console.log(res)
    })
    return {
      state
    }
  }
}
</script>

<style lang="less" scoped>
.icon_list {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px  ;
  .icon_item {
    min-width: 20%;
    max-width: 20%;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    .icon {
      width: 65%;
    }
  }
}
</style>