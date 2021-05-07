var http = require('http');
// Cheerio 是一个Node.js的库， 它可以从html的片断中构建DOM结构，然后提供像jquery一样的css选择器查询
var cheerio = require('cheerio');
const url = 'http://www.bigdeal.cn/'
http.get(url, function (res) {
    var html = '';
    // 获取页面数据
    res.on('data', function (data) {
        html += data;
        console.log(html)
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
const filterSlideList=(html)=>{
    if(html){
        const $ = cheerio.load(html)
        const now_url=$('.catlist_li').eq(0).find('a').attr('href')
        http.get(now_url,res=>{
            var now_html=''
            res.on('data', function (data) {
                now_html += data;
                // console.log(now_html)
            });
            res.on('end',()=>{
                if(now_html){
                    const $ = cheerio.load(now_html)
                    const now_price = $('tbody').find('tr').eq(1).find('td').eq(4).text()
                    console.log(now_price)
                }
            })
        })
        // return now_url
    }
}