// 加载http模块
var https = require('https');
// Cheerio 是一个Node.js的库， 它可以从html的片断中构建DOM结构，然后提供像jquery一样的css选择器查询
var cheerio = require('cheerio');
var axios = require('axios');
// 定义网络爬虫的目标地址：自如友家的主页
var arr=[219345,,218221,218225,293489,291973,262721,36765,42260,273021,308057,302589,302591,298705,308059,308061,314229,314235,314237,314241]
var url = 'https://m.sfbest.com/newproduct/info/?productId=';


getinf()
arr.map(item=>{
    getinf(item)  
})
// axios.get(url, )
function getinf(item){
    // console.log(url)
    const itemurl=url+item;
    https.get(itemurl, function (res) {
        var html = '';
        // 获取页面数据
        res.on('data', function (data) {
            html +=data;
            // console.log(html)
        });
    //     // 数据获取结束
        res.on('end', function () {
            // 通过过滤页面信息获取实际需求的轮播图信息
            var json = JSON.parse(html)
            axios.get('http://localhost/test/insert.php', {
                    params: {
                        itemname: json.data.product.productName,
                        price: json.data.product.sfbestPrice,
                        img: json.data.product.imageUrls.join(','),
                        brand: json.data.product.brandName,
                        describe: json.data.product.adWords||'',
                        comnum: json.data.product.comments,
                        field: json.data.product.countryName,
                        weight: json.data.product.specification,
                        gift:json.data.product.giftType,
                        class: '牛肉',
                    }
                }).then(function (response) {
                    console.log(response.data)
                    console.log(item)


                }).catch(function (error) {
                    console.log(error)
                })
    //         // console.log(json)
    //         // var slideListData = filterSlideList(html);
    //         // // 打印信息
    //         // printInfo(slideListData);
        });

    }).on('error', function () {
        console.log('获取数据出错！');
    });

}
