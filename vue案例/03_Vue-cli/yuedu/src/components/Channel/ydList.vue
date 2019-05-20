<template>
  <div class="channels">
    <ul>
      <li v-for="article in list" :key="article.id">
        <div class="channel-pic">
          <img height="210" :src="article.img_url">
        </div>
        <div class="channel-body">
          <div class="channel-title">
            <router-link 
              :to="{name:'article', params: {id: article.id}}">
            {{article.title}}</router-link>
          </div>
          <div class="channel-meta">
            <span>{{article.author}}</span>
            <span>{{article.podcast}}</span>
            <span>{{article.duration}}</span>
            <span>{{article.play_time}}次</span>
          </div>
          <div class="channel-desc">
            {{article.content | sliceContent}}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页 -->
    <ydPages :count="count" :current-page="currentPage"></ydPages>
  </div>
</template>

<script>
import ydPages from './ydPages'
export default {
  props: {
    list: Array,
    count: Number,
    currentPage: Number
  },
  components: {
    ydPages
  },
  filters: {
    sliceContent (value) {
      return value.slice(0, 70) + '……'
    }
  }
}
</script>

<style>
.channels {
  margin-top: 30px;
  width: 620px;
}

.channels li {
  display: flex;
  background: #fff;
  margin-bottom: 20px;
}

.channels .channel-pic {
  width: 210px;
  height: 210px;
  flex-shrink: 0;
  overflow: hidden;
}

.channels .channel-body {
  padding: 30px;
  box-sizing: border-box;
}

.channels .channel-title  {
  margin-bottom: 15px;
}

.channels .channel-title a {
  font-size: 18px;
}

.channels .channel-meta {
  margin-bottom: 25px;
  color: #999;
  font-size: 12px;
}

.channels .channel-meta span {
  margin-right: 10px;
}
.channels .channel-desc {
  font-size: 12px;
  color: rgb(112, 112, 112);
  line-height: 22px;
  letter-spacing: 1px;
}
</style>
