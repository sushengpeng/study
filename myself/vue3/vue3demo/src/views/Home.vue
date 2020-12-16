<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click="confirm">按钮</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private msg: string = "sdiafjla";
  private created() {
    console.log(this.msg);
  }
  private confirm() {
    console.log(1111);
  }
}
</script>
