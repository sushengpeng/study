<template>
  <div class="outer">
    <div class="content">
      <v-switch :case="name">
        <template #xiaohong>
          <p>我是小红</p>
        </template>
        <template #xiaohei>
          <p>我是小黑</p>
        </template>
        <template #default>
          <p>我是默认</p>
        </template>
      </v-switch>
    </div>
  </div>
</template>

<script>
import Switch from '@/components/Switch'
import { reactive } from 'vue'
export default {
  components: {
    'v-switch': Switch
  },
  setup() {
    let name = "xiaohong1"
    return {
      name
    }
  }
}
</script>

<style lang="less" scoped>
</style>