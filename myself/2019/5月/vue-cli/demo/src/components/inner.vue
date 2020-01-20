<template>
  <div class="inner">
    <div class="toplist">
      <div class="cell" v-for='(value,key) in data' :key=key>        
        <a :href="value.author_id">
            <img :src="value.author.avatar_url" alt="...">
        </a>
        <span class="tab" v-if='value.top' style='background:#80bd01;color:#fff'>
            精华
        </span>
        <span class="tab" v-else>
            {{value.tab | switch }}
        </span>
        <div class="article">
            <a :href="value.id" class="title">{{value.title}}</a>
            <div>
                <span class="count_of_replies">{{value.reply_count}}</span>
                <span>/</span>
                <span class="count_of_visits">{{value.visit_count}}</span>
            </div>
            
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "inner",
  data() {
    return {
      data: null,
      page : 1,
      limit: 10,
    };
  },

  methods: {
    getdata() {
      axios.get("https://cnodejs.org/api/v1/topics",{ 
          params:{
            page:this.page,
            limit:this.limit
          }   
      }).then(res => {
        this.data = res.data.data;
        this.$emit('getStatus',true)
        // console.log(1);
      })
    }
  },
  created() {
    this.getdata()
  },
  filters:{
      switch(val){
          return val=='share'?'分享':val=='job'?'招聘':val=='good'?'精华':'问答'
      }
  },
};
</script>
<style>
a{
    text-decoration: none;
    color:black;
}
.inner {
  width: 100%;
  /* height: 100px; */
  /* background-color: palegreen; */
}
.cell{
    background: #fff;
    display: flex;
    position: relative;
    padding: 10px 0 10px 20px;
    font-size: 14px;
}
.cell img{
    width: 30px;
    height: 30px
}
.cell .tab{
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 12px;
    align-self: flex-start;
    margin-left:10px;
}
.cell .article{
    display: flex;
    flex-direction: column;
    margin-left:10px;
}
.cell .article div{
    align-self: flex-start;
}
.cell .title{
    color: #888;
    font-size: 1em;
    width: 587px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cell .count_of_replies{
    color:#9e78c0;
}
</style>


