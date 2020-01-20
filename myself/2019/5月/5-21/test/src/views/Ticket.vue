<template>
    <div class="ticket">
        这里是售票厅<br>
        <button @click='getTicket'>买票</button>
    </div>
</template>

<script>
export default {
    name:'ticket',
    methods:{
        getTicket(){
            localStorage.setItem('ticket',true)
            this.$router.push(this.$route.query.returnUrl)
            console.log(this.$route)
        }
    }
}
</script>

<style>

</style>
