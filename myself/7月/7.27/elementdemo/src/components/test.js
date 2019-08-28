let arr =[
    {
      date: "1542274800000",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "1542274800000",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1517 弄"
    },
    {
      date: "1542274800000",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1519 弄"
    },
    {
      date: "1542274800000",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1516 弄"
    }
  ]
  
function changeDate () {
    Date.prototype.Format = function (fmt) {
        var o = {
                "M+": this.getMonth() + 1, // 月份
                "d+": this.getDate(), // 日
                "h+": this.getHours(), // 小时
                "m+": this.getMinutes(), // 分
                "s+": this.getSeconds(), // 秒
                "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
                "S": this.getMilliseconds() // 毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + ""));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    arr.map(item=>{
        let t =item.date
        item.date =new Date(parseInt(t)).Format('yy-MM-dd hh:mm:ss')
        // console.log(item.date)
    })
    console.log(arr)
}

// changeDate()
// let t= new Date()
// console.log(new Date(1542274800000).Format('yy-MM-dd hh:mm:ss'))
console.log((new Date()).getTime())