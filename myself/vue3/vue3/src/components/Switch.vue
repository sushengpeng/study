<template>
  <div class="switch"></div>
</template>

<script>
export default {
  props: ['case'],
  setup(props, { slots }) {
    let render = slots.xiaohong()
    return () => {
      if (slots[props.case]) {
        return slots[props.case]();
      }

      if (slots["default"]) {
        return slots["default"]();
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>