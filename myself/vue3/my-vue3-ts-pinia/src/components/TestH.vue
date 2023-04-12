<script>
import { number } from '@intlify/core-base';
import { defineComponent, onMounted, h } from 'vue'
export default defineComponent({
  name: 'TestH',
  components: {},
  data() {
    return {
      text: "这是个文本"
    }
  },
  props: {
    test: number
  },
  render() {
    console.log(this)
    console.log(this.$attrs)
    const props = {
      style: { color: "red" },
      onclick: () => {
        this.$emit("submit")
      }
    };
    return h("span", props, [this.text])
  }
})
</script>
<style lang='scss' scoped>
.TestH {}
</style>