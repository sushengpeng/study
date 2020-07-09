<template>
  <div class="fly_wrap">
    <div class="fly_tab">
      <div
        class="tab_item_content tab_content_line"
        :style="{'height':lineHeight,'lineHeight':lineHeight}"
      >
        <div
          :class="['tab_item',{'fly_tab_line':tabIndex==index}]"
          v-for="(item,index) in tabList"
          :key="index"
          @click="tabChange(index)"
        >{{item}}</div>
      </div>
    </div>
    <div class="fly_tab_content">
      <div class="translateBox" :style="domStyle">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "flyTab",
  data() {
    return {
      height: 40,
      tabIndex: 0,
      tabList: [],
      domStyle: null
    };
  },
  computed: {
    lineHeight() {
      return this.height + "px";
    }
  },
  props: {
    active: {
      type: Number || String,
      default: 0
    }
  },
  components: {},
  created() {
    this.height = (document.body.clientWidth / 9).toFixed(2);
  },
  mounted() {
    window.onresize = function() {
      this.height = (document.body.clientWidth / 9).toFixed(2);
    };
  },
  watch: {
    active: {
      handler(val) {
        console.log(val)
        this.tabIndex = val;
      },
      immediate:true
    },
    tabIndex: {
      handler(val) {
        let tabContent = document.getElementsByClassName("translateBox")[0];
        this.domStyle = `transform:translate3d(-${100 * val}%, 0, 0)`;
      },
      immediate:true
    }
  },
  methods: {
    tabChange(val) {
      this.tabIndex = val;
      this.$emit("tabChange",val);
    },
    pushTitle(val) {
      this.tabList.push(val);
    }
  }
};
</script>

<style scoped>
.tab_item_content {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  position: relative;
}
.tab_content_line::after {
  content: " ";
  height: 1px;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background: rgba(206, 206, 208, .1);
  margin: 0 auto;
}
.tab_item_content .tab_item {
  flex: 1;
  background: #fff;
  position: relative;
}
.tab_item::after {
  content: " ";
  /* display: none; */
  position: absolute;
  width: 0;
  font-size: 14px;
  transition: width 0.3s cubic-bezier(0, 0.37, 0, 1.63);
  background: #ff4040;
  height: 2px;
  color: #262626;
  font-weight: 400;
  left: 0;
  right: 0;
  bottom: 5px;
  margin: 0 auto;
}
.fly_tab_line::after {
  width: 20%;
  display: block;
  border-radius: 2px;
}
.fly_tab_content {
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}
.translateBox {
  display: flex;
  flex-direction: row;
  transition: transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>