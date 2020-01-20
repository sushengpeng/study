<template>
    <div class="main">
        <v_sidebar></v_sidebar>
        <v_content @getStatus='setStatus'></v_content>
        <pagination></pagination>
    </div>
</template>

<script>
import v_sidebar from './v_sidebar'
import v_content from './v_content'
import pagination from './pagination'
export default {
    name:'v_main',
    data(){
        return {
            // status:
        }
    },
    components:{
        v_sidebar,v_content,pagination
    },
    methods:{
        setStatus(data){
            this.status = data
            this.$emit('getStatus',true)
            console.log(data)
        }
    },
}
</script>
<style>
.main{
    width: 100%;
    /* height: 500px; */
    border-radius: 3px;
    background-color: #fff;
}

</style>



