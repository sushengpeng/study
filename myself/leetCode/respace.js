/**
 * 哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。
 * 像句子"I reset the computer. It still didn’t boot!"已经变成了"iresetthecomputeritstilldidntboot"。
 * 在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典dictionary，不过，有些词没在词典里。
 * 假设文章用sentence表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。
 * 输入：
    dictionary = ["looked","just","like","her","brother"]
    sentence = "jesslookedjustliketimherbrother"
    输出： 7
    解释： 断句后为"jess looked just like tim her brother"，共7个未识别字符。
    0 <= len(sentence) <= 1000
    dictionary中总字符数不超过 150000。
    你可以认为dictionary和sentence中只包含小写字母。
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 * 文章排列是从前往后的
 * 用文章中的数据与字典匹配，匹配到之后将字符串切掉
 * 若字符串之前的字符串无法匹配，如timher只能匹配到her，匹配到her之后将tim塞入数组中
 */
let dictionary =  ["looked"]
let sentence = "lookedlooked"
var respace = function (dictionary, sentence) {
    if (sentence.length == 0) return 0;
    let dp = new Array(sentence.length).fill(0);
    for (let i = 1; i <= sentence.length; i++) {
        dp[i] = dp[i - 1] + 1;
        // 上面表示，如果没有匹配那么dp[i]相比于dp[i-1]直接多1
        // 接着讨论如果新加一个字符，组成了一个词的情况
        for (let j = 0; j < dictionary.length; j++) {
            let word = dictionary[j].length;
            if (dictionary[j] == sentence.substring(i - word, i) && word <= i) {
                dp[i] = Math.min(dp[i], dp[i - word]);
            }
        }
    }
    return dp[sentence.length]
    // let resultList = []
    // let str = sentence
    // let cloneSentence = sentence
    // let leftLetterLength = 0
    // let getSentence = (dictionary, str) => {
    //     let length = str.length
    //     for (let i = 1; i <= length; i++) {
    //         let letter = str.slice(0, i)
    //         if(str==="") break;
    //         if (dictionary.includes(letter)) {
    //             if (leftLetterLength > 0 && cloneSentence.length !== length) resultList.push(cloneSentence.slice(0, leftLetterLength))
    //             resultList.push(letter)
    //             cloneSentence = cloneSentence.slice(leftLetterLength + i)
    //             leftLetterLength = 0
    //             str = str.slice(i)
    //             if (!str) {
    //                 break
    //             } else {
    //                 getSentence(dictionary, str)
    //             }
    //             break;
    //         }
    //         if (i === length && str!=="") {
    //             leftLetterLength++;
    //             getSentence(dictionary, str.slice(1))
    //         }
    //     }
    // }
    // getSentence(dictionary, cloneSentence)
    // return resultList.length
};
console.log(respace(dictionary, sentence))