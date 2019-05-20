<template>
  <div class="other5">
    <div class="banner-header">
      <span class="title">悦读FM频道其他节目</span>
      <div>
        <router-link :to="{name: 'channel', params: {id: typeid}}">查看全部</router-link>
      </div>
    </div>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <router-link :to="{name: 'article', params: {id: article.id}}">{{article.title}}</router-link>
        <div>
          <span>文:{{article.author}}</span>
          <span>主播:{{article.podcast}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array,
    typeid: [Number, String]
  }
}
</script>

<style scoped>
  .other5 {
    margin-top: 30px;
    padding: 30px;
    background: #fff;
    box-sizing: border-box;
  }

  li {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dashed #eee;
  }
  li a {
    margin-bottom: 5px;
    font-size: 12px;
  }
  li span {
    font-size: 12px;
    color: #999;
    margin-right: 20px;
  }
  .banner-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .banner-header .title {
    font-size: 14px;
    border-left: 3px solid #ee5044;
    font-weight: bold;
    color: rgb(112, 112, 112);
    padding-left: 8px;
    line-height: 16px;
  }

</style>
