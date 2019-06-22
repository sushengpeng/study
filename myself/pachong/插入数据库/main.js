// 加载http模块
var https = require('https');
// Cheerio 是一个Node.js的库， 它可以从html的片断中构建DOM结构，然后提供像jquery一样的css选择器查询
var cheerio = require('cheerio');
var axios = require('axios')

// 定义网络爬虫的目标地址：自如友家的主页
var url = 'https://m.sfbest.com';

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
        // var imgList = $('.swiper-wrapper').eq(1);

        var info = $('.p-info');
        var img = '';
        var price, weight, itemname, commun, feild, brand, gift;
        // 轮播图数据
        var slideListData = [];
        $(".floor").eq(15).find('.swiper-slide').each(
            function (item) {
                slideListData.push({
                    itemname: $(".floor").eq(15).find('.swiper-slide').eq(item).find('.brand-p-name').text(),
                    price: $(".floor").eq(15).find('.swiper-slide').eq(item).find('.brand-p-price').text().slice(1),
                    describe:$(".floor").eq(15).find('.swiper-slide').eq(item).find('.brand-p-describe').text()||'',
                    img: $(".floor").eq(15).find('.swiper-slide').eq(item).find('img').data('original')||'',
                    brand: '',
                    class:'家具用品',
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
            class: i.class,
            describe: i.describe,
            brand: i.brand
        }}).then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    });
    // console.log(item)
}