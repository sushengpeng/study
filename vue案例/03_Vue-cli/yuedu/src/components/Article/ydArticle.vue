<template>
  <div v-if="article" class="article">
    <div class="item">
      <div class="item-base">
        <div class="item-name">{{article.title}}</div>
        <div class="item-meta">
          <span>{{article.author}}</span>
          <span>{{article.podcast}}</span>
          <span>{{article.duration}}</span>
          <span>播放{{article.play_time}}次</span>
        </div>
        <div class="item-pic">
          <img :src="article.img_url">
        </div>
        <audio controls :src="article.mp3_url"></audio>
      </div>
      <div class="item-intro" v-html="formatContent">
      </div>

      <div class="item-label">
        <div class="item-tags">
          <strong>标签：</strong>
          <span>{{article.labels.split(',').join("&nbsp;&nbsp;")}}</span>
        </div>
      </div>
      
    </div>
    <ydComment v-if="article"></ydComment>
  </div>
</template>

<script>
import ydComment from './Comment/ydComment'

export default {
  props: {
    article: Object
  },
  components: {
    ydComment
  },
  computed: {
    formatContent () {
      // this.article.content
      const reg = /\n/g
      return this.article.content.replace(reg, '<br>')
    }
  }
}
</script>

<style>
audio {
  margin-top: 10px;
  width: 100%;
}
.article {
  margin-top: 30px;
  width: 620px;
}
.item-base {
  padding: 30px;
  margin-bottom: 30px;
  box-sizing: border-box;

  background: #fff;
}
.item-name {
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 8px;
}

.item-meta {
  color: #999;
  line-height: 20px;
  margin-bottom: 25px;
}

.item-meta span {
  margin-right: 20px;
}

.item-intro {
  padding: 20px 30px;
  background: #fff;
  margin-bottom: 30px;
  line-height: 22px;
  letter-spacing: 1px;
  color: rgb(112, 112, 112);
  overflow: hidden;
}

.item-label {
  padding: 5px 30px;
  background: #FFF;
  margin-bottom: 30px;
  line-height: 28px;
  color: #707070;
}
</style>
