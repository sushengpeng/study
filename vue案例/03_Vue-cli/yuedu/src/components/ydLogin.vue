<template>
  <div>
    <router-link to="/login" v-if="!user">登录</router-link>
    <div class="mine" v-else @click.stop="show = !show">
      <span>{{user.nikiname}}</span>
      <div :class="['mine-menu', {'active': show}]">
        <router-link :to="{name: 'user', params: {id: user.id}}">个人主页</router-link>
        <router-link to="/setting/base">设置</router-link>
        <a href="javacript:;">退出</a>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../bus'
export default {
  data () {
    return {
      user: null,
      show: false
    }
  },
  created () {
    const _this = this
    document.addEventListener('click', function () {
      if (_this.show) {
        _this.show = false
      }
    })

    bus.$on('send:user', (user) => {
      this.user = user
    })

    const user = localStorage.getItem('user')

    this.user = user ? JSON.parse(user) : null

  }
}
</script>

<style>
  .mine {
    position: relative
  }

  .mine-menu {
    display: none;
    position: absolute;
    width: 80px;
    bottom: -30px;
    flex-direction: column;
    background: #fff;
    box-shadow: 1px 1px 5px 0px #dedede;
  }

  .mine-menu.active {
    display: flex;
  }
  .mine-menu a {
    line-height: 20px;
    padding: 0 4px !important;

  }
</style>
