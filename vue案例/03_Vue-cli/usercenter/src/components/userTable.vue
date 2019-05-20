<template>
<div>
  <userSearch></userSearch>
  <el-button type="danger" @click="removeUsers">删除</el-button>
  <!-- id1, id2, id3 -->
  <el-table
    :data="users"
    v-loading="loading"
    @selection-change="selectionChange"> 
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="100"
      :formatter="sexFormat">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="100">
    </el-table-column>
    <el-table-column
      prop="birth"
      label="出生日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="addr"
      label="住址">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="removeUser(scope)">删除</el-button>
        <el-button type="text" size="small" @click="editUser(scope)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <userPager></userPager>
  <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
    <el-form>
      <el-form-item>
        <el-input :disabled="true" v-model="editData.id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="editData.name"></el-input>
      </el-form-item>
      <el-form-item>
        <!-- <el-input v-model="editData.sex"></el-input> -->
        <el-radio v-model="editData.sex" :label="1">男</el-radio>
        <el-radio v-model="editData.sex" :label="0">女</el-radio>

      </el-form-item>
      <el-form-item>
        <el-input v-model="editData.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="editData.birth"
          type="date"
          placeholder="选择日期"
          :picker-options="options">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-input v-model="editData.addr"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="editUserEnter">提交</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</div>
  
</template>

<script>
import userPager from './userPager'
import userSearch from './userSearch'
export default {
  components: {
    userPager,
    userSearch,
  },
  computed: {
    users () {
      return this.$store.state.users
    },
    loading () {
      return this.$store.state.usersLoading
    }
  },
  data () {
    return {
      ids: '',
      dialogTableVisible: false,
      editData: {},
      options: {
        disabledDate (time) {
          console.log(time)
          return time.getTime() > Date.now()
        }
      }

    }
  },
  methods: {
    sexFormat (row, column, cellValue) {
      return cellValue ? '男' : '女'
    },
    removeUser ({$index, row}) {
      this.$confirm('确定要删除该用户吗？', '提示', {
        type: 'error'
      }).then(res => {
        // 如果点击确定则进行dispatch
        const id = row.id
        // 将id和index传递给action
        this.$store.dispatch('removeUser', {id, index: $index}).then(() => {
          this.$message.success('删除成功')
        })
      }).catch(() => {
          this.$message('已取消删除操作')
      })
      
    },
    selectionChange (selection) {
      // console.log(selection)
      // selection 就是所有被选择数据 是一个数据里面包含了行的信息
      this.ids = selection.map(sel => sel.id).join(',')
      
    },
    removeUsers () {
      // 将ids给action
      this.$confirm('确定删除已选用户吗？', '警告', {
        type: 'error'
      }).then(() => {
        this.$store.dispatch('removeUsers', this.ids).then(() => {
          this.$message.success('已删除')
        })
      }).catch(() => {
        this.$message('已取消删除操作')
      })
    },
    editUser ({row}) {
      this.editData = Object.assign({}, row)
      this.dialogTableVisible = true
    },
    editUserEnter () {
      this.dialogTableVisible = false
      this.$store.dispatch('editUser', this.editData)
    }
  },
  created () {
    /* this.axios.get('http://localhost:3000/user/listpage', {
      params: {
        page: 1
      }
    }).then(res => {
      console.log(res)
      this.users = res.data.users.users
    }) */
    this.$store.dispatch('getUsers', {}).then(() => {
    })
  }
}
</script>

<style>

</style>
