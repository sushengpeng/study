<template>
  <div class="header">
    <div class="container">
      <nav>
        <router-link to="/">
          <span class="mlogo"><span class="logo-a fl"></span><span class="logo-b fl"></span><span class="logo-c fl"></span></span>悦读 FM
        </router-link>
        <router-link 
          :to="{name: 'channel', params: {id: item.id}}" 
          v-for="item in menu"
          :key="item.id"  
          exact-active-class="active"
        >{{item.type}}</router-link>
      </nav>
      <ydLogin></ydLogin>

    </div>
  </div>
</template>

<script>
import ydLogin from './ydLogin'
export default {
  data () {
    return {
      menu: []
    }
  },
  // 组件创建完成后立即请求
  created () {
    this.axios.get('/types').then(res => {
      // 将对应的数组设置给menu
      this.menu = res.data.res
    })
  },
  components: {
    ydLogin
  }
}
</script>

<style>
  .header .container {
    display: flex;
    justify-content: space-between;
  }
  .active {
    color: #ee5044;
  }
  .logo {width:120px; line-height:30px;}
  .logo a {display:inline-block; width:100%; height:100%; font-size:14px;}
  .logo a:hover {color:#F30;}
  .mlogo {width:20px; height:30px; display: inline-block; margin-right:15px;}
  .mlogo span {width:4px; background:#ee5044; display: inline-block; border-radius:2px;}
  .logo-a {height:18px; margin:6px 4px 0 0;transform:translateY(4px)}
  .logo-b {height:28px; margin:0 4px 0 0;transform:translateY(8px)}
  .logo-c {height:18px; margin:6px 0 0 0;transform:translateY(4px)}
  .header {
    height: 106px;
    line-height: 106px;
    background: #fff;
  }
  .header a {
    padding: 0 20px;
  }
</style>
