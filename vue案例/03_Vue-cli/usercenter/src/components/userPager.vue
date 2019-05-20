<template>
  <el-pagination
    layout="sizes, prev, pager, next"
    :total="total"
    :page-sizes="[10, 20, 30, 40, 50]"
    @current-change="currentChange"
    @size-change="sizeChange">
  </el-pagination>
</template>

<script>
export default {
  computed: {
    total () {
      return this.$store.state.total
    }
  },
  methods: {
    currentChange (page) {
      // console.log(page)
      // 改变对应的state.params中的值即可
      // this.$store.commit('setParams', {page})
      this.$store.dispatch('getParams', {page})
      // this.$store.dispatch('getUsers')
    },
    sizeChange (size) {
      // this.$store.commit('setParams', {pagesize: size})
      this.$store.dispatch('getParams', {pagesize: size})

      // this.$store.dispatch('getUsers')
    }
  }
}
</script>

<style>

</style>
