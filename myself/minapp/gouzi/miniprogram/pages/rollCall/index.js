// pages/rollCall/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    number: 0,
    timmer: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getRandomColor() {
      return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
    },
    start() {
      if (this.data.timmer != null) {
        clearInterval(this.data.timmer)
        this.setData({
          timmer: null
        })
        return
      } else {
        let timmer = setInterval(() => {
          let number = Math.floor(Math.random() * 85 + 1)
          let color = this.getRandomColor()
          this.setData({
            number: number,
            color: color
          })
        }, 16.67)
        this.setData({
          timmer: timmer
        })
      }
    }
  }
})