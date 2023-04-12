<!--
 * @Autor: flygg123
 * @Date: 2022-06-24 14:39:36
 * @LastEditTime: 2022-07-19 14:30:42
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
  <div class="title">about</div>
  <div class="outer"></div>
</template>
<script lang="ts">
import { defineComponent, reactive, h } from 'vue';
export default defineComponent({
  name: 'about',
  setup() {
    let obj = reactive({ count: 0 });
    return {
      obj,
    };
  },
});
</script>
