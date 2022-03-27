<template>
  <div class="outer">
    <div class="content">
      <testComp />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import testComp from "./testComp.vue";
export default defineComponent({
  setup() {
    let list = reactive([
      { name: "1", type: "111", value: "" },
      { name: "2", type: "222", value: "" },
      { name: "3", type: "333", value: "" },
    ]);
    onMounted(() => {});
    return {
      list,
    };
  },
  provide() {
    return {
      list: this.list,
    };
  },
  components: {
    testComp,
  },
});
</script>
<style lang="less" scoped>
.text {
  font-size: 20px;
  color: red;
}
</style>
