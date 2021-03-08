<template>
  <div class="outer">
    <div class="content">
      <span>{{plus}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import { reactive, ref, computed } from "vue";
import { fetch } from '@/api/axios'
export default class index extends Vue {
  private str: string = "1111";
  private obj: any = ref(2);
  protected num: number = 1111;
  plus = computed(() => this.obj + 1);
  created() {
    this.obj++;
    console.log(++this.num);
    this.getData();
  }
  private confirm() {
    console.log(1111);
  }
  private getData() {
    const params = {
      phoneType: "h5",
    };
    fetch({
      url: "/index/user-active",
      method: "post",
      data: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      console.log(res);
    });
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
