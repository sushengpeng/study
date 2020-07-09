<template>
  <div class="home">
    <fly-tab @tabChange="tabChange" :active="2">
      <flyTabItem v-for="(item,index) in tabList" :key="index" :title="item">{{'内容'}}{{item}}</flyTabItem>
    </fly-tab>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      tabList: [1, 2, 3, 4]
    };
  },
  components: {},
  created() {
    window.vue = this;
  },
  methods: {
    tabChange(value) {
      // console.log(value);
    }
  }
};
</script>
<style scoped>
/deep/ .fly_tab_content {
  height: 200px;
}
</style>
