<template>
  <div class="container article-main">
    <!-- 文章详情 -->
    <ydArticle :article="article"></ydArticle>
    <!-- 其他文章推荐 -->
    <div class="other-article">
      <!-- 轮播推荐 -->
      <ydOther20 :articles="formatOther20"></ydOther20>
      <!-- 列表推荐 -->
      <ydOther5 :articles="other5" :typeid="typeid"></ydOther5>
    </div>
  </div>
</template>

<script>
import ydArticle from '../../components/Article/ydArticle'
import ydOther20 from '../../components/Article/ydOther20'
import ydOther5 from '../../components/Article/ydOther5'

export default {
  components: {
    ydArticle,
    ydOther20,
    ydOther5
  },
  data () {
    return {
      article: null,
      other20: [],
      other5: [],
      typeid: 1
    }
  },

  computed: {
    formatOther20 () {
      /* 
         [
          [{},{},{},{}],
          [{},{},{},{}],
          [{},{},{},{}],
          [{},{},{},{}],
          [{},{},{},{}]
        ]
      */
      // 对other20进行操作
      

      const arr = []

      for (let i = 0; i < 20; i+=4) {
        arr.push(this.other20.slice(i, i + 4))
      }
      return arr
    }
  },
  created () {
    const id = this.$route.params.id
    this.axios.get(`/article/${id}`).then(res => {
      this.$route.meta.title = res.data.res.title
      
      this.article = res.data.res
      this.typeid = res.data.res.type_id
      // 需要使用res.data.res.type_id进行新的请求
      return this.axios.get(`/articles/${res.data.res.type_id}/rand`)
    }).then(res => {
      // 这个res就是上次.then之后return的结果
      this.other5 = res.data.res
    })

    this.axios.get(`/articles/rand`).then(res => {
      this.other20 = res.data.res
    })

    /* this.axios.get(`/articles/${id}/rand`).then(res => {
      this.other5 = res.data.res
    }) */
  }
}
</script>

<style>
  .article-main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .other-article {
    margin-top: 30px;
    width: 360px;
  }
</style>
