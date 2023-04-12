<template>
  <div class="emitCompontent">
    <el-button @click="updateShow">修改</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  name: "emitCompontent",
  components: {},
  // emits: ["update:show"],
  props: ["show"],
  setup(props, ctx) {
    onMounted(() => {});
    function updateShow() {
      console.log(props.show);
      ctx.emit("update:show", !props.show);
    }
    return {
      updateShow,
    };
  },
});
</script>
<style lang="less" scoped>
.emitCompontent {
}
</style>
