<template>
  <div class="outer">
    <div class="content">
      <span>{{a}}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { log } from "console";
import { defineComponent, onMounted } from "vue";
import { getProduct } from "../api/index";
export default defineComponent({
  setup() {
    let a: number = 111;
    onMounted(() => {
      let params = {
        page: 1,
        _ajax: 1,
      };
      getProduct(params).then((res) => {
        console.log(res);
      });
    });
    return {
      a,
    };
  },
});
</script>
