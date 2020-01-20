  <template>
  <el-table :data="test" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "1564313899736",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "1564313899736",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "1564313899736",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "1564313899736",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  computed:{
    changeDate () {

       this.tableData.map(item=>{
           item.date =new Date(item.date)
       })
       return this.tableData
    },
    test(){
        this.tableData.map(item=>{
           item.date =new Date(parseInt(item.date)).Format('yy-MM-dd hh:mm:ss')
       })
       return this.tableData
    }
  }
};
</script>

<style>
</style>
