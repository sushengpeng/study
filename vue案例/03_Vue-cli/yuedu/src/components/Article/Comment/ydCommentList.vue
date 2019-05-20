<template>
  <div class="comment-list">
    <div class="comment-title"></div>
    <div class="comments" v-if="!comments.length">
      <div class="comment-item no-comment" >
        暂无评论
      </div>
    </div>
    <div class="comments" v-else>
      <div class="comment-item" v-for="comment in comments" :key="comment.id">
        <div class="comment-avatar">
          <img src="http://www.yuedu.fm/static/file/member/defaultuser" alt="" width="40" height="40">
        </div>
        <div class="comment-body">
          <div class="comment-info">
            <h3 class="name">{{comment.nikiname}}</h3>
            <time>{{comment.reply_time}}</time>
          </div>
          <p class="comment-content">{{comment.content}}</p>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  props: {
    comments: Array
  }
}
</script>

<style>
  .comment-list {
    margin-top: 30px;
  }
  .comments {
    padding: 0 30px;  
    background: #fff;
  }
  .comment-item {
    background: #fff;
    display: flex;
    padding: 30px 0;
    box-sizing: border-box;
    border-bottom: 1px dashed #eee;
  }

  .comment-item:last-child {
    border-bottom: none;
  }
  .comment-item .comment-avatar {
    margin-right: 10px;
  }

  .comment-item .comment-info {
    display: flex;
    margin-bottom: 10px;
  }
  .comment-item .name {
    margin-right: 10px;
    color: #707070;
    font-weight: bold;
  }
  .comment-item time {
    font-size: 12px;
    color: #999;
  }

  .comment-item .comment-content {
    font-size: 12px;
    color: #707070;
    line-height: 1.6;
  }

  .no-comment {
    text-align: center;
    color: #707070;
    font-size: 16px;
    display: block;
  }
</style>
