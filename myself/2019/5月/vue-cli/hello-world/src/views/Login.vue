<template>
    <div class="login">
        这里是登录界面<br>
        <button @click='login'>登录</button>
        
    </div>
</template>

<script>
export default {
    name:'Login',
    methods:{
        login(){
            localStorage.setItem('login',true)
            this.$router.push(this.$route.query.returnUrl)
        }
    }
}
</script>

<style>

</style>
