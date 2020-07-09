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
var respace = function (dictionary, sentence) {
    let length = sentence.length
    let resultList = []
    for (let i = 0; i < length; i++) {
        let str = sentence.slice(0, j)
        if (dictionary.includes(str)) {
            resultList.push(str)
            sentence = sentence.slice(j)
            respace(dictionary, sentence)
        }
    }
};