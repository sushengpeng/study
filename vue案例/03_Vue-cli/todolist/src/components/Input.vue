<template>
  <input type="text" placeholder="输入内容" v-model="content" @keyup.enter="sendContent">
</template>

<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    sendContent () {
      // 将this.content分发给actions
      this.$store.dispatch('getContent', this.content).then(() => {
        this.content = ""
      })
    }
  }
}
</script>

<style>

</style>
