<template>
  <el-form :inline="true">
    <el-form-item>
      <el-input v-model="name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="search">搜索</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    search () {
      // 把this.name传递给vuex
      this.$store.dispatch('getParams', {name: this.name})

      // params改变后，发起对应的action请求
      // this.$store.dispatch('getUsers')
    }
  }
}
</script>

<style>

</style>
