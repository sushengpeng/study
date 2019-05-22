<template>
    <div class="zoo">
        这里是动物园<br>
        <router-link to='/zoo/monkey'>猴子园</router-link>
        <router-view/>
    </div>
</template>

<script>
// import monkey from './Monkey'
export default {
    name:'zoo',
}
</script>

<style>

</style>
