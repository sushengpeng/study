let list = ['1', '-1', '-1.', '-1.a', '-1..','1111aaa','111.aaa.','-.1','-0.2']
// let list = ['-1.']
function inputTypeNumber(val,hasDot) {
  console.log('初始：', val);
  let isCut = false
  let value
  let regSingle = /^[0-9]$/
  let regAll = /^[0-9]*$/
  val = val.toString()
  //去空格
  val = val.split("").filter(item => item !== " ").join("")
  //判断是否是负数
  if (val.indexOf('-') === 0) {
    isCut = true
    val = val.slice(1)
  }
  if(hasDot){
    let singleArr = val.split("")
    let list = singleArr.filter(item=>regSingle.test(item))
    value = list.join("")
    console.log('处理后：', value, '\n')
    return value
  }
  //正则校验是否是数字
  if (/^([1-9]\d*\.?\d*$)|(0\.[0-9]*$)/.test(val)) {
    value = val
  } else {
    let arr = val.split('.') // 1.2=>[1,2] 1..=>[1,"",""]
    let indexOf = val.indexOf('.')
    let lastIndexOf = val.lastIndexOf('.')
    arr = arr.map(item => {
      if (regAll.test(item)) {
        return item
      } else {
        let _arr = item.split("")
        return _arr.filter(_item => regSingle.test(_item)).join("")
      }
    })
    if (arr[0] === "") {
      value = ""
    } else if (lastIndexOf !== indexOf) {
      arr.pop()
      value = arr.join(".")
    } else if (lastIndexOf === indexOf && indexOf !== -1) {
      value = arr.join('.')
    } else if (indexOf === -1) {
      value = parseFloat(val)
    } else {
      value = ""
    }
  }
  value = (isCut ? '-' : '') + (Number.isNaN(value) ? "" : value)
  console.log('处理后：', value, '\n')
  return value
}
list.map(item => {
  inputTypeNumber(item)
})