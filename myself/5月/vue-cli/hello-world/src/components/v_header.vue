<template>
    <div class="header">
        <!-- <a href="###" 
        v-for='(list,key) in classfy'
        :class="['topic-tab',{'current-tab':key==status}]" 
        @click = "change(key)"
        :key=key 
        >{{list | switchClassfy}}</a> -->
        <router-link 
        v-for='(list,key) in classfy'
        :key=key
        :class="['topic-tab',{'current-tab':key==status}]" 
        @click.native = "change(key)"
        :to="'/?tab=' +list"
        >{{list | switchClassfy}}</router-link>
    </div>
</template>
<script>
import bus from '../bus'
export default {
    name:'v_header',
    data(){
        return {
            classfy:['all','good','share','ask','job','dev'],
            status:0,
            tab:''
        }
    },
    methods:{
        change(key){
            this.status=key
            this.tab=this.$route.query.tab
            // console.log(this.tab)
        }
    },
    watch:{
        tab(){
            bus.$emit('tab',this.tab)
        }
    },
    filters:{
        switchClassfy(value){
            return value=='all'?'全部':value=='good'?'精华':value=='share'?'分享':value=='ask'?'问答':value=='job'?'招聘':'客户端测试'
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




