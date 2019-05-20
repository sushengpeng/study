<template>
  <div @click="handler">{{msg}}</div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  methods: {
    handler () {
      alert(2)
    }
  }
}
</script>

<style>

</style>

/* 
const Com = {
  template: `
    <div>
      <ul>
        <li></li>
      </ul>
    这是一个新的组件</div>
  `
}

 */