/**
 * 身份证输入控制
 * @param {*} val 
 */
export function idFormatter(val){
  let str = val.slice(-1)
  if (val.length == 15 || val.length == 18) {
    if (/(^\d{1}$)|(^(|X|x)$)/.test(str)) {
      return val
    } else {
      return val.slice(0, -1)
    }
  } else if (val.length == 16) {
    if (/(^(|X|x)$)/.test(val.slice(-2, -1))) {
      return val.slice(0, -1)
    } else {
      return val
    }
  } else {
    if (/(^\d{1}$)/.test(str)) {
      return val
    } else {
      return val.slice(0, -1)
    }
  }
}
/**
 * 获取n天后的日期（n为负时，获取n天前的日期），返回yyyymmdd
 * @param {*} dd 
 * @param {*} n 
 * @returns 
 */
export function GetFormatDate (dd, n) {
  // var dd = new Date()
  dd.setDate(dd.getDate() + n) // 获取n天后的日期
  let y = dd.getFullYear() // 年份
  let m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1) // 月份，不足10补0
  let d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 日，不足10补0
  return y + '' + m + '' + d
}
/**
 * 获取n天后的日期
 * @param {*} dd 
 * @returns 
 */
export function GetNowDate (dd) {
  // dd.setDate(dd.getDate() + n) // 获取n天后的日期
  let y = dd.getFullYear() // 年份
  let m = ((dd.getMonth() + 1) < 10) ? ('0' + (dd.getMonth() + 1)) : (dd.getMonth() + 1) // 月份，不足10补0
  let d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 日，不足10补0
  console.log(y + '' + m + '' + d)
  return y + '' + m + '' + d
}

/**
 * 去掉字符串内所有空格
 * @param {String} param
 */
export function superTrim(str) {
  return String(str).replace(/\s/g, '')
}

/**
 * 格式化金额为金融格式
 * ! 该函数对于长度大于16位的数字，会有损失精度风险
 * @param {Number | String} amount 数额
 * @param {Number} decimalCount 小数位数
 * @param {String} decimal 小数点字符
 * @param {String} thousands 千位分隔符字符
 */
export function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount)
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount

    const negativeSign = amount < 0 ? "-" : ""

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString()
    let j = (i.length > 3) ? i.length % 3 : 0

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "")
  } catch (e) {
    console.error(e)
    return amount
  }
}

/**
 * 将格式化后的金额转换为数字格式
 * @param {String} money 千位分隔后的金额字符串
 */
export function restoreMoney(money) {
  try {
    money = String(money)
    if (Number(money.split('.')[1]) == 0) {
      money = money.split('.')[0]
    }
    const ret = Number(money.replace(/,/g, ''))
    if (isNaN(ret)) {
      console.error('restoreMoney: param is not correct')
      return money
    }
    return ret
  } catch (e) {
    console.error(e)
    return money
  }
}

/**
 * 格式化银行卡号，每四位加空格
 * @param {String | Number} number 银行卡号
 */
export function formatBankCardNumber(number) {
  const trimedNumber = String(number).replace(/\s/g, '').substring(0, 19)
  if (isNaN(trimedNumber)) {
    return number
  }
  return trimedNumber.replace(/(\d{4})(?=\d)/g, '$1 ')
}

/**
 * 格式化手机号格式为1xx xxxx xxxx
 * @param {String | Number} tel 手机号
 */
export function formatTel(tel) {
  const trimedTel = String(tel).replace(/\s/g, '').substring(0, 11)
  if (isNaN(trimedTel)) {
    return tel
  }
  return trimedTel.replace(/(\d{3})(?=\d)/, '$1 ').replace(/(\d{4})(?=\d)/g, '$1 ')
}

/**
 * 判断手机号是否合法
 * @param {String} tel 手机号
 */
export function checkTel(tel) {
  const pattern = /^((1[1-9][0-9])+\d{8})$/
  return pattern.test(tel)
}

/**
 * 判断银行卡号是否合法
 * @param {String | Number} param 银行卡号
 */
export function checkBankCardNumber(param) {
  const pattern = /^([1-9]{1})(\d{14,18})$/
  return pattern.test(param)
}

/**
 * 判断身份证号是否合法
 * @param {String} param 身份证号
 */
export function checkIdCardNumber(param) {
  const pattern = /^\d{15}$|^\d{18}$|(^\d{17}[0-9]|x|X)$/
  // const pattern = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return pattern.test(param)
}


export function toPx(param) {
  let clientWidth = document.body.clientWidth;
  return (param / 750) * clientWidth;
}

/**
 * 获取sessionStorage中的item
 * @param {string} value
 * 
*/
export function getItem(value) {
  if (!sessionStorage.getItem("vuex")) {
    return ""
  } else {
    return JSON.parse(sessionStorage.getItem("vuex"))[value]
  }
}
/**
 * isProduction
 * 判断是否是生产环境
 */
export function isProduction() {
  if (process.env.NODE_ENV == 'production') {
    return Promise.resolve()
  } else {
    return Promise.reject()
  }
}
/**
 * 获取cookie
 */
export function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      // 判断这个cookie的参数名是不是我们想要的
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
/**
 * 设置cookie
 * @param {*} cname cookie名
 * @param {*} cvalue cookie值
 * @param {*} exdays 天数单位1天
 */
export function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

