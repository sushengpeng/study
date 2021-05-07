/**
 * 5、给你一个字符串 s，找到 s 中最长的回文子串。
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
// 	let str = '#'+s.split("").join("#")+"#"
// 	let length = str.length
// 	let maxStr = ''
// 	if (length <= 1) {
// 		return str
// 	}
// 	for (let i = 1; i < length; i++) {
// 		let j = 1
// 		while (j !== 0) {
// 			let str1 =""
// 			if (i - j >= 0) {
// 				str1 = str.slice(i - j, i + j + 1)
// 			}else{
// 				j = 0
// 				continue
// 			}
// 			if (isLongestPalindrome(str1)) {
// 				// console.log(str)
// 				j++
// 				maxStr = str1.split('#').join("").length > maxStr.length ? str1.split('#').join("") : maxStr
// 			} else {
// 				j = 0
// 				continue
// 			}
// 		}
// 	}
// 	console.log(maxStr)
// 	return maxStr
// };
var longestPalindrome = function (s) {
	let length = s.length
	let maxStr = ''
	for (let i = 0; i <= length; i++) {
		let j = i + 1
		while (j <= length) {
			let str = s.slice(i, j)
			if (isLongestPalindrome(str)) {
				// console.log(str)
				maxStr = str.length > maxStr.length ? str : maxStr
			}
			j++
		}
	}
	console.log(maxStr)
	return maxStr
};
let isLongestPalindrome = function (str) {
	let length = str.length
	if (length <= 1) {
		return true
	} else {
		return str === str.split('').reverse().join("")
	}
}
// let str = "zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"
let str = "1abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa2"
longestPalindrome(str)
