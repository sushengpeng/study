<template>
  <div id="app">
    <hd></hd>
    <router-view/>
  </div>
</template>
<script>
import hd from './components/hd'
export default {
  name: "App",
  components:{
    hd
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
body {
  color: rgb(112, 112, 112);
  letter-spacing: 0.5px;
  background: rgb(245, 245, 245);
  font: 12px/1.5 "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei",
    微软雅黑, STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif;
}
.fr{
  float: right
}
.fl{
  float: left;
}
a{
    text-decoration: none;
    color: #707070;
}
.wp{
    width: 1010px;
    margin: auto;
}
</style>
