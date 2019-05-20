<template>
    <div class="header">
        <a href="###" 
        v-for='(list,key) in classfy'
        :class="['topic-tab',{'current-tab':key==status}]" 
        :key=key 
        @click = "change(key)"
        >{{list}}</a>
    </div>
</template>
<script>
export default {
    name:'v_header',
    data(){
        return {
            classfy:['全部','精华','分享','问答','招聘','客户端测试'],
            status:0
        }
    },
    methods:{
        change(key){
            this.status=key
        }
    }
}
</script>
<style>
.header{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    height: 25px;
    /* width: 100%; */
}
a{
    text-decoration: none;
    font-size: 14px;
}

.topic-tab{
    margin: 0 10px;
    color: #80bd01;
    float: left;
    padding: 3px 4px;
}
.current-tab{
    background-color: #80bd01;
    color: #fff;
    
    border-radius: 3px;

}
</style>




