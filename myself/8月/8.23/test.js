let num = '111,111.22';
function int2str(num) {
    num = num.replace(',','')
    let point =num.indexOf('.')==-1?'.00':num.slice(num.indexOf('.'),num.length)
    num = num.slice(0,num.indexOf('.'))
    console.log(point)
    let numberStr = num.toString()
    let str = numberStr.split('').reverse()
    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 4 === 0) {
            str.splice(i, 0, ',')
        }
    }
    str.reverse()
    let handleResult = ''
    for (let j = 0; j < str.length; j++) {
        handleResult += str[j]
    }
    return handleResult+point
}
console.log(int2str(num))
