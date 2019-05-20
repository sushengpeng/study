<template>
    <div class="content">
        <v_header></v_header>
        <inner ></inner>
    </div>
</template>
<script>
import v_header from './v_header'
import inner from './inner'
export default {
    name:'v_content',
    components:{
        v_header,inner
    }
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
