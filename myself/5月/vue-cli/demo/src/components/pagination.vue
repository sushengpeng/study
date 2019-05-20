<template>
    <div class="pagination" v-show='status'>
        <ul>
            <li>«</li>
            <li 
            v-for='num in number'
            :key='num'
            >{{num}}</li>
            <li>»</li>
        </ul>
    </div>
</template>
<script>
import bus from '../main'
export default {
    name:'pagination',
    data(){
        return {
            number:5,
            status:false
        }
    },
    props:['status'],
    created(){
        bus.$on('getStauts',(data)=>{
            console.log(2)
            this.status = data
        })
    }
}
</script>
<style>
.pagination{
    height: 50px;
}
.pagination ul{
    box-shadow: none;
    list-style: none;
}
.pagination ul li{
    font-size: 14px;
    float: left;
    line-height: 2em;
    padding: 4px 12px;
    line-height: 20px;
    border: 1px solid #ddd;
    border-left-width: 0;
}
</style>


