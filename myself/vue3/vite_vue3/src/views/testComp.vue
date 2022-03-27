<template>
  <div class="outer">
    <el-input v-model="input" placeholder="Please input" clearable />
    <el-form :model="form" label-width="120px">
      <el-form-item :label="item.name" v-for="(item,index) in list" :key="index">
        <el-input v-model="item.value" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  inject: ["list"],
  setup() {
    onMounted(() => {});
    return {};
  },
  components: {},
});
</script>
<style lang="less" scoped>
.text {
  font-size: 20px;
  color: red;
}
</style>
