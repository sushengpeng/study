//获取基金数据
var http = require('http');
// Cheerio 是一个Node.js的库， 它可以从html的片断中构建DOM结构，然后提供像jquery一样的css选择器查询
var cheerio = require('cheerio');
let baseUrl = 'http://fund.eastmoney.com'
const fundList = ['450009', '166002', '000584', '001475', '160629']
const hasFund = ['000594', '164403', '001838', '000409', '001790', '006228', '161725', '160632']

setInterval(() => {
  console.clear()
  // console.log('关注中')
  fundList.map(item => {
    let url = baseUrl + `/${item}.html`
    getHtml(url)
  })
  // console.log('持有中')
  hasFund.map(item => {
    let url = baseUrl + `/${item}.html`
    getHtml(url)
  })
}, 1000 * 60);
function getHtml(url) {
  http.get(url, function (res) {
    var html = '';
    // 获取页面数据
    res.on('data', function (data) {
      html += data;
      // console.log(html)
    });
    // 数据获取结束
    res.on('end', function () {
      // 通过过滤页面信息获取实际需求的轮播图信息
      filterSlideList(html)
      // 打印信息
      // console.log(slideListData);
    });
  }).on('error', function () {
    console.log('获取数据出错！');
  });
}
const filterSlideList = (html) => {
  if (html) {
    const $ = cheerio.load(html)
    const doms1 = $('.dataNums').eq(0).find('.ui-font-large').text()
    const doms2 = $('.dataNums').eq(1).find('.ui-font-large').text()
    const doms3 = $('.dataNums').eq(2).find('.ui-font-large').text()
    const name = $('.fundDetail-tit').find('div').text() + ')'
    console.log(doms1, doms2, doms3, name)
  }
}