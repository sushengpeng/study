<template>
  <div id="hd">
    <div class="wp" id="hd-wp">
      <div class="logo fl">
        <a href="/">
          <span class="mlogo fl row">
            <span class="logo-a fl"></span>
            <span class="logo-b fl"></span>
            <span class="logo-c fl"></span>
          </span>悦读 FM
        </a>
      </div>
      <div class="menu">
        <router-link
          v-for="(value,index) in classfy"
          :key="index"
          :to="'/channel/' +index"
          :class="{'cur':num==index}"
          @click.native="setNum(index)"
        >{{value}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hd",
  data() {
    return {
      num: 0,
      classfy: ["悦读", "情感", "连播", "校园", "音乐", "Labs"]
    };
  },
  methods: {
    setNum(i) {
      this.num = i;
      console.log(i);
    }
  },
  watch:{
      $route(n,o){
          console.log(n.params.id,o.params.id)
      }
  }
};
</script>

<style>
#hd {
  width: 100%;
  height: 100px;
  background: #fff;
}
#hd-wp{
    padding: 38px 0;
    height: 30px;
}
.logo {
  width: 120px;
  line-height: 30px;
}
.logo a {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 14px;
}
.mlogo {
  width: 20px;
  height: 30px;
  display: block;
  margin-right: 15px;
}
.mlogo span {
  width: 4px;
  background: #ee5044;
  display: block;
  border-radius: 2px;
}
.logo-a {
  height: 18px;
  margin: 6px 4px 0 0;
}
.logo-b {
  height: 28px;
  margin: 0 4px 0 0;
}
.logo-c {
  height: 18px;
  margin: 6px 0 0 0;
}
.mine {
  border-left: 1px dotted #ccc;
  height: 20px;
  line-height: 20px;
  margin: 5px 0 5px 20px;
}
.search {
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
  height: 20px;
  overflow: hidden;
  width: 150px;
  margin: 5px 0;
}
.menu {
  margin: 0 300px 0 120px;
  text-align: center;
}
.menu a {
  display: inline-block;
  padding: 0 20px;
  line-height: 30px;
  font-size: 14px;
  color: #707070;
}
.menu a:hover{
  color:#ee5044
}
.menu .cur {
  color: #f30;
}
</style>
