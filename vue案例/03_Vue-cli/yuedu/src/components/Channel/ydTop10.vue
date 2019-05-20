<template>
  <div class="channel-top10">
    <h3>{{top10.type}}频道TOP10</h3>
    <ul class="channel-list">
      <li v-for="article in top10.articles" :key="article.id">
        <router-link :to="{name:'article', params: {id: article.id}}">{{article.title}}</router-link>
        <div>
          <span>文: {{article.author}}</span>
          <span>主播: {{article.podcast}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    top10: Object
  }
}
</script>

<style>
.channel-top10 {
  margin-top: 30px;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
  margin-bottom: 30px;
  overflow: hidden;
  width: 360px;
}

.channel-top10 h3 {
  font-size: 14px;
  border-left: 3px solid #ee5044;
  padding-left: 8px;
  line-height: 16px;
}

.channel-list {
  padding-top: 30px;
}

.channel-top10 li  {
  border-bottom: 1px solid #EEE;
  list-style: decimal;
  margin-left: 20px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  color: #707070;
  font-size: 12px;


}

.channel-top10 li a{
  color: #707070;
  font-size: 12px;

}

.channel-top10 li div {
  color: #999;
  font-size: 12px;
}

.channel-top10 li div span {
  margin-right: 20px;
}

</style>
