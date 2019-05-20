<template>
  <div class="comment-input">
    <textarea v-model="comment.content"></textarea>
    <button @click="send">评论</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      comment: {
        article_id: 0,
        content: ''
      }
    }
  },
  methods: {
    send () {
      /* this.axios.post('/comment', {
        article_id: this.comment.article_id,
        content: this.comment.content
      }) */
      this.axios.post('/comment', this.comment).then(res => {
        // 将请求后得到的结果 通过子父通信发送给ydComment
        if (res.data.res_code === 200) {
          this.$emit('send:comment', res.data.res)
        }
      })

    }
  },
  created () {
    this.comment.article_id = this.$route.params.id
  }
}
</script>

<style>
.comment-input {
  display: flex;
}

.comment-input textarea {
  outline: none;
  width: 530px;
  padding: 10px;
  background: #fff;
  border: none;
  height: 30px;
  line-height: 16px;
  font-size: 12px;
  resize: none;
}

.comment-input button {
  width: 70px;
  background: #ee5044;
  font-size: 12px;
  color: white;
  text-align: center;
  height: 50px;
  line-height: 50px;
  border: none;
  outline: 0;
  cursor: pointer;
}

</style>
