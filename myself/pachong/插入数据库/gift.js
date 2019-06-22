// 加载http模块
var https = require('https');
// Cheerio 是一个Node.js的库， 它可以从html的片断中构建DOM结构，然后提供像jquery一样的css选择器查询
var cheerio = require('cheerio');
var axios = require('axios')

// 定义网络爬虫的目标地址：自如友家的主页
var url = 'https://m.sfbest.com/vg/list/0?categoryId=24&curIndex=4';

https.get(url, function (res) {
    var html = '';
    // 获取页面数据
    res.on('data', function (data) {
        html += data;
        // console.log(html)
    });
    // 数据获取结束
    res.on('end', function () {
        // 通过过滤页面信息获取实际需求的轮播图信息
        var slideListData = filterSlideList(html);
        // 打印信息
        printInfo(slideListData);
    });
}).on('error', function () {
    console.log('获取数据出错！');
});

/* 过滤页面信息 */
function filterSlideList(html) {
    if (html) {
        // 沿用JQuery风格，定义$
        // console.log(html)
        var $ = cheerio.load(html);
        // 根据id获取轮播图列表信息
        // 轮播图数据
        var slideListData = [];
        $(".gift_item").each(
            function (item) {
                slideListData.push({
                    itemname: $(".gift_item").eq(item).find('.gift_title').text(),
                    price: parseInt($('.gift_price').eq(0).text().slice(1,$('.gift_price').eq(0).text().indexOf("/")-1)),
                    describe: $(".gift_item").eq(item).find('.gift_desc').text()||'',
                    img: $(".gift_item").eq(item).find('img').attr("src")||'',
                    // brand: '',
                    weight: $(".gift_item").eq(item).find(".gray").text(),
                })
            }
        )
        // 返回轮播图列表信息
        return slideListData;
    } else {
        console.log('无数据传入！');
    }
}

/* 打印信息 */
function printInfo(item) {
    // 遍历信息列表

    item.map(function (i) {
        axios.get('http://localhost/test/insert.php',
        {params:{
            itemname:i.itemname,
            price:i.price,
            img:i.img,
            class: '休闲零食',
            describe: i.describe,
            gift: 1,
            weight: i.weight
        }}).then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    });
    // console.log(item)
}