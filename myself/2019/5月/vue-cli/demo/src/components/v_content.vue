<template>
    <div class="content">
        <v_header></v_header>
        <inner 
        :status='status'
        @getStatus='setStatus'
        ></inner>
    </div>
</template>
<script>
import v_header from './v_header'
import inner from './inner'
export default {
    name:'v_content',
    data(){
        return {
            status:null
        }
    },
    components:{
        v_header,inner
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
.content{
    width: 100%;
    padding: 0;
    margin-top:20px;
    margin-right: 305px;

}
</style>
