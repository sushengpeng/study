<template>
  <div class="axiosCancel">
    <el-button @click="cancel">取消</el-button>
  </div>
</template>

<script>
import axios from "axios"
import { getList } from "@/api/axiosCancel"
import { Button } from 'element-ui'
import { mapMutations } from 'vuex'
import urlAnayLais from "@/utils/urlAnaylais"
export default {
  name: "axiosCancel",
  data() {
    return {
      source: null
    }
  },
  components: {
    [Button.name]: Button
  },
  created() {
    getList().then(res => {
      console.log(res);
    })
    getList().then(res => {
      console.log(res);
    })
    getList().then(res => {
      console.log(res);
    })
    getList().then(res => {
      console.log(res);
    })
    getList().then(res => {
      console.log(res);
    })
  },
  methods: {
    ...mapMutations(["delRequest"]),
    cancel() {
      let { path } = urlAnayLais()
      this.delRequest(path)
    }
  }
}
</script>

<style lang="less" scoped>
.axiosCancel {
}
</style>