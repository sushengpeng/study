<template>
  <div class="tabContentItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "flyTabItem",
  props: {
    title: {
      require: true
    }
  },
  data() {
    return {};
  },
  created() {
    this.$parent.tabList.push(this.title);
  }
};
</script>

<style scoped>
.tabContentItem {
  min-width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
  overflow-y: auto;
  flex: 1;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
</style>