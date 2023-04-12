<template>
  <div class="testEmit">
    <emitCompontent v-model:show="show" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import emitCompontent from "../components/emitCompontent.vue";
export default defineComponent({
  name: "testEmit",
  components: {
    emitCompontent,
  },
  setup() {
    const show = ref(false);
    // setInterval(() => {
    //   show.value = !show.value;
    // }, 8000);
    watch(show, (val) => {
      console.log(val);
    });
    onMounted(() => {});
    return {
      show,
    };
  },
});
</script>
<style lang="less" scoped>
.testEmit {
}
</style>
