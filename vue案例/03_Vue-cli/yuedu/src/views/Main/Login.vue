<template>
  <div class="login">
    <div class="form-group">
      <input type="text" placeholder="请输入邮箱" v-model="user.email">
    </div>
    <div class="form-group">
      <input type="text" placeholder="请输入密码" v-model="user.password">
    </div>
    <div class="form-group">
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import bus from '../../bus'
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  }, 
  methods: {
    login () {
      this.axios.post('/user/login', this.user).then(res => {
        if (res.data.res_code === 200) {
          this.$router.replace('/')
          localStorage.setItem('token', res.data.res.token)
          localStorage.setItem('user', JSON.stringify(res.data.res.user))

          bus.$emit('send:user', res.data.res.user)
        }
      })
    }
  }
}
</script>

<style>
  .login {
    width: 1010px;
    margin: 30px auto;
  }
  .form-group input {
    outline: none;
    width: 300px;
    height: 40px;
    border: none;
    margin-bottom: 20px;
    padding: 0 10px;
  }

  .form-group button {
    outline: none;
    border: none;
    color: #fff;
    background: #ee5044;
    width: 80px;
    height: 30px;
  }
</style>
