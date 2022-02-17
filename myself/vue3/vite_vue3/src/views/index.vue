<template>
  <div class="outer">
    <div class="content">
      <span class="text">{{data.a}}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { getProduct } from "../api/index";
export default defineComponent({
  setup() {
    let data = reactive({
      a: 111,
      list: [],
    });
    onMounted(() => {
      let params = {
        page: 1,
        _ajax: 1,
      };
      getProduct(params).then((res) => {
        console.log(res);
        data.list = res.data.list.data;
      });
    });
    return {
      data,
    };
  },
});
</script>
<style lang="less" scoped>
.text {
  font-size: 20px;
  color: red;
}
</style>
