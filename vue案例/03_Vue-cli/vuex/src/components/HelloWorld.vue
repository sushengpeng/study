<template>
  <div class="hello">
    <!-- {{msg}} -->
    {{m}} - {{count}}
    <button @click="changeMsg('默认的数据')">按钮</button>
  </div>
</template>

<script>

/* 
  computed: mapState(['state名字'])
  相当于
  computed: {
    state名字 () {
      return this.$store.state.state名字
    }
  }


  computed: mapState({
    自定义数据名 (state) {
      return state.对应的数据名
    },
    自定义数据名: state => state.对应的数据名,
    自定义数据名: "state中对应的数据名"
  })

  相当于
  computed: {
    自定义数据名 () {
      return this.$store.state.state名字
    }
  }

  mapState返回的是一个对象

  mapState(['a', 'b']) => {a: xxx, b: xxx}

  如果直接在computed后添加mapState会导致无法在computed中添加其他组件独有的computed
  所以我们可以利用扩展运算符...
  computed: {
    ...mapState([]),
    ...mapState({})
  }
*/

import {mapState, mapMutations} from 'vuex'

export default {
  name: 'HelloWorld',
  /* computed: {
    msg () {
      return this.$store.state.msg
    }
  }, */

  // computed: mapState(['msg']),
  /* computed: mapState({
    m: state => state.msg,
    count: state =>state.count
  }), */
  // computed: mapState()
  computed: {
    a () {
      return 1
    },
    ...mapState(['count']),
    ...mapState({
      // m: state => state.msg
      m: 'msg'
    })
    
  },
  methods: {
    /* changeMsg () {
      this.$store.commit('setMsg', '新的内容')
    } */
    ...mapMutations({
      changeMsg: 'setMsg'
    })
    /* changeMsg (msg) {
      this.$store.commit('setMsg', msg)
    } */
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
