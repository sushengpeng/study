<template>
  <div class="container channel">
    <!-- 组件1 文章列表 -->
    <ydList :list="list" :count="count" :current-page="currentPage"></ydList>
    <!-- 组件2 top10列表 -->
    <ydTop10 :top10="top10"></ydTop10>
  </div>
</template>

<script>
import ydList from '../../components/Channel/ydList'
import ydTop10 from '../../components/Channel/ydTop10'

import bus from '../../bus'
export default {
  components: {
    ydList, ydTop10
  },
  data () {
    return {
      list: [],
      top10: {},
      count: 0,
      currentPage: 1
    }
  },
  /* watch: {
    '$route': {
      handler: 'getData',
      immediate: true
    }
  }, */
  methods: {
    getData () {
      // 获取当前路由中的id
      // const id = this.$route.params.id
      const {id} = this.$route.params
      // 请求数据并设置给list
      this.axios.get(`/articles/${id}/page/1`).then(res => {
        this.list = res.data.res.articles
        // 把分页所需要的数据传递给ydList 再由ydList传递给ydPages
        this.count = res.data.res.count
        this.currentPage = res.data.res.page
      })

      this.axios.get(`/articles/${id}/top10`).then(res => {
        this.top10 = res.data.res
      })
    }
  },
  created () {
    this.getData()

    bus.$on('changeCurrentPage', (page) => {
      this.axios.get(`/articles/${this.$route.params.id}/page/${page}`).then(res => {
        this.list = res.data.res.articles
        this.count = res.data.res.count
        this.currentPage = res.data.res.page
      })
    })
  }
}
</script>

<style scoped>
/* 添加scoped只有当前组件及子组件才能使用该样式 */
.channel {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
</style>
