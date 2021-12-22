<template>
  <div class="outer">
    <div class="content">
      {{activeIndex}}
      <inject-test></inject-test>
    </div>
  </div>
</template>

<script>
import { Button, Menu, MenuItem, Submenu } from 'element-ui';
import injectTest from './injectTest.vue'
export default {
  data() {
    return {
      activeIndex: "0"
    }
  },
  provide() {
    return {
      foo1: 'foo1',
      foo2: 'foo2',
      foo3: this.activeIndex,
    }
  },
  routerData:{
    test1: 111,
    test2: 222
  },
  components: {
    [Button.name]: Button,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [Submenu.name]: Submenu,
    injectTest
  },
  created(){
    let _pro = Promise.resolve(1)
    _pro.then()
  },
  methods: {
    handleSelect() { }
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