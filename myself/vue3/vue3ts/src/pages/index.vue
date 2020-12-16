<template>
  <div class="outer">
    <div class="content">

    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
export default class index extends Vue {
  created() {
    console.log(222);
  }
  // created() {
  //   const params = {
  //     phoneType: "h5",
  //   };
  //   axios({
  //     url: "/index/user-active",
  //     method: "post",
  //     data: params,
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // }
  private confirm() {
    console.log(1111);
  }
}
</script>

<style lang="less" scoped>
.outer {
  background: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .content::-webkit-scrollbar {
    display: none;
  }
}
</style>
