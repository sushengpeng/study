// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:
// 输入: "()"
// 输出: true

// 示例 2:
// 输入: "()[]{}"
// 输出: true

// 示例 3:
// 输入: "(]"
// 输出: false

// 示例 4:
// 输入: "([)]"
// 输出: false

// 示例 5:
// 输入: "{[]}"
// 输出: true
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    let str = process.stdin.read().slice(0, -2);
    console.log(str.split(''))
    if (str !== null && str.length % 2 === 0) {
        validPparentheses(str)
    } else {
        console.log('输入的字符串不合法')
    }
});
validPparentheses = (str) => {
    let string = str
    let arr = ['[]', '{}', '()', '【】', '（）']
    // console.log(str)
    // console.log(str.slice(str.length / 2 - 1, str.length / 2))
    arr.map(item => {
        if (string.length > 0) {
            if (str.slice(str.length / 2 - 1, str.length / 2) === item.slice(0, 1)) {
                console.log(1)
            }
        }

    })

}
process.stdin.on('end', () => {
    process.stdout.write('end');
});