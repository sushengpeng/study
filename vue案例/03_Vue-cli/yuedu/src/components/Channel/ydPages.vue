<template>
  <div class="pages">
    <span v-if="currentPage > 1" @click="changePage(currentPage - 1)">上一页</span>
    <template v-for="page in pages">
      <span 
        @click="changePage(page)"
        v-if="page>=start && page<=end"
        :key="page" 
        :class="{'active': currentPage === page}"
      >{{page}}</span>
    </template>
    
    <span v-if="currentPage < pages" @click="changePage(currentPage + 1)">下一页</span>

  </div>
</template>

<script>
/* 
  1 1 2 3 4
    1 2 3 4 5 6 7
  2 
    3 4 5 6 7 8 9
    5 6 7 8 9 10 11

  3 总页码是100 99 98 97
    94 95 96 97 98 99 100
*/


import bus from '../../bus'
export default {
  props: {
    count: Number,
    currentPage: Number
  },
  data () {
    return {
      interval: 2
    }
  },
  computed: {
    pages () {
      return Math.ceil(this.count / 10)
    },
    start () {
      // 如果当前页小于5页 start都是1
      let start = Math.max(1, this.currentPage - this.interval)
      // 判断当前页 + 3 > 总页码
      if ((this.currentPage + this.interval) > this.pages) {
        // 到底是只有三页  还是 很多页
        start = (this.pages - 2 * this.interval) < 1 ? 1 : (this.pages - 2 * this.interval);
      }
      return start
    },
    end () {
      // 如果当前也是 5 总页码是75页 结束页为 5 + 3 = 8
      let end = Math.min(this.currentPage + this.interval, this.pages)
      // 如果 当前页 < interval + 1  1 2 3 
      if (this.currentPage < (this.interval + 1)) {

        end = (2 * this.interval + 1) > this.pages ? this.pages : (2 * this.interval + 1);
      }
      return end
    }
  },
  methods: {
    changePage (page) {
      // 非父子通信，组件触发事件
      bus.$emit('changeCurrentPage', page)
    }
  }
}
</script>

<style>
  .pages {
    text-align: center;
  }

  .pages span {
    font-size: 12px;
    cursor: pointer;
    padding: 3px 10px;
    display: inline-block;
    color: #707070;
  }

  .pages span:hover {
    color: #ee5044;
  }

  .pages .active {
    color: #ee5044;
    font-weight: bold;
  }
</style>
