<template>
  <div class="new_advert" :style="{background:state.advertList.data_list_color}">
    <div class="new_advert_top">
      <img :src="item.banner_img" alt="" v-for="(item,i) in state.advertList.data_list" :key="i">
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { getNewList } from "@/api/index"
export default {
  setup() {
    let state = reactive({
      advertList:{}
    })
    getNewList().then(res => {
      state.advertList = res.data
      console.log(state)
    })
    return {
      state
    }
  }
}
</script>

<style lang="less" scoped>
.new_advert{
  .new_advert_top{
    img{
      width: 100%;
    }
  }
}
</style>