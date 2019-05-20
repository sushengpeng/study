<template>
  <div>
    <ydCommentInput @send:comment="getComment"></ydCommentInput>
    <ydCommentList :comments="comments"></ydCommentList>
  </div>
</template>

<script>
import ydCommentInput from './ydCommentInput'
import ydCommentList from './ydCommentList'

export default {
  components: {
    ydCommentInput,
    ydCommentList
  },
  data () {
    return {
      comments: []
    }
  },
  methods: {
    getComment (comment) {
      console.log(comment)
      this.comments.push(comment)
    }
  },
  created () {
    const id = this.$route.params.id
    this.axios.get(`/comments/${id}/page/1`).then(res => {
      if (res.data.res) {
        this.comments = res.data.res
      }
    })
  }
}
</script>

<style>

</style>
