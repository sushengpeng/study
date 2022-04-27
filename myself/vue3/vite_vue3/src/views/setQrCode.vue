<template>
  <div class="outer">
    <div class="content">
      <span>测试二维码</span>
      <div class="qrcode" ref="qrCodeUrl"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import QRCode from "qrcodejs2";
export default defineComponent({
  setup() {
    let list = reactive([
      { name: "1", type: "111", value: "" },
      { name: "2", type: "222", value: "" },
      { name: "3", type: "333", value: "" },
    ]);
    onMounted(() => {
      this.creatQrCode();
    });
    return {
      list,
    };
  },
  provide() {
    return {
      list: this.list,
    };
  },
  components: {},
  methods: {
    creatQrCode() {
      let qrcode = new QRCode(this.$refs.qrCodeUrl, {
        text: "xxxx", // 需要转换为二维码的内容
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    },
  },
});
</script>
<style lang="less" scoped>
.text {
  font-size: 20px;
  color: red;
}
</style>
