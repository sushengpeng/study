<template>
  <div class="banner">
    <div class="banner-header">
      <span class="title">其他相关节目</span>
      <div class="icon">
        <span class="iconfont icon-prev" @click="prev" :class="{disabled: index === 0}"></span>
        <span class="iconfont icon-next" @click="next" :class="{disabled: index === 4}"></span>
      </div>
    </div>
    <div style="overflow:hidden">
      <ul :style="{transform: 'translate3d(-' + index * 300 + 'px, 0, 0)'}">
        <li v-for="(articleArr, index) in articles" :key="index">
          <div class="slide" v-for="article in articleArr" :key="article.id">
            <img :src="article.img_url" alt="" width="135" height="84">
            <router-link :to="{name: 'article', params: {id: article.id}}">{{article.title}}</router-link>
          </div>
        </li>
      </ul>      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array
  },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    next () {
      if (this.index < 4) {
        this.index++
      }
    },
    prev () {
      if (this.index > 0) {
        this.index--
      } 
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  background: #fff;
  padding: 30px;
  box-sizing: border-box;
}
ul {
  width: 1500px;
  display: flex;
  transition: transform 1s;
}

li {
  display: flex;
  flex-wrap: wrap;
}

li .slide {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 135px;
}
.slide a {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 5px;
}

.slide:nth-child(2n + 1) {
  margin-right: 30px;
}

.slide:first-child, .slide:nth-child(2) {
  margin-bottom: 30px;
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

.icon {
  display: flex;
}
.icon span {
  width: 10px;
  margin-left: 10px;
  font-weight: bold;
}

.icon .disabled {
  color: #ccc;
}
</style>
