<template>
    <div class="pagination" v-show='status'>
        <ul>
            <li style="border-left: 1px solid #ddd"  v-if="page==1" disabled>«</li>
            <li style="border-left: 1px solid #ddd" 
            v-else
            @click='sendNum(page-1)'>«</li>
            <li 
            v-for='num in number'
            :key='num'
            @click='sendNum(num)'
            :class="{'active':num==page}"
            >{{num}}</li>
            <li @click='sendNum(page+1)'>»</li>
        </ul>
    </div>
</template>
<script>
import bus from '../bus'

export default {
    name:'pagination',
    data(){
        return {
            number:5,
            status:false,
            page:1
        }
    },
    methods:{
        sendNum(num){
            bus.$emit('setNum',num)
            // console.log(num)
        }
    },
    mounted(){
        bus.$on('sendPage',res=>{
            this.page = res
        })
        bus.$on('getStatus',res=>{
            this.status = res
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
    cursor: pointer;
}
.active{
    color:#80bd01
}
</style>


