<template>
    <div class="topic">
        <div v-html="data.data.data.content">

        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'topic',
    data(){
        return {
            data:null
        }
    },
    created(){
        const id = this.$route.params.id
        axios.get('https://cnodejs.org/api/v1/topic/'+id,).then(res=>{
            this.data = res
            console.log(res)
        })
        
    }
}
</script>
<style>
.topic{
    text-align: left;
}
</style>


