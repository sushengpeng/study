var canvas = document.getElementById("myCanvas");
if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var grad = ctx.createLinearGradient(0, 0, 300, 0); //创建一个渐变色线性对象
    grad.addColorStop(0, "#4e8cfd"); //定义渐变色颜色
    grad.addColorStop(1, "#26c5fc");
    ctx.fillStyle = grad; //设置fillStyle为当前的渐变对象
    ctx.fillRect(0, 0, 300, 150); //绘制渐变图形
}

function move() {
    var sx, sy, ex, ey;
    var index;
    $("li").on("touchstart", function (e) {
        index = $(this).index();
        sx = e.targetTouches[0].clientX;
        sy = e.targetTouches[0].clientY;
    })
    $("li").on("touchmove", function (e) {
        ex = e.targetTouches[0].clientX;
        ey = e.targetTouches[0].clientY;
        if (ex < sx && sx - ex > sy - ey) {
            // 左滑距离
            $('li').eq(index).find(".msg").css("margin-left", ex - sx + "px")
        }
    })
    $("li").swipeLeft(function () {
        // console.log($(this).index());
        // console.log("left")
        // console.log($(this).data("init"))
        $('li').eq(index).find(".msg").animate({
            "margin-left": "-12rem"
        }, {
            easing: "ease-in",
            complete: function () {

            }
        })
    })
    $("li").swipeRight(function () {
        // console.log($(this).index());
        // console.log("right")
        $('li').eq(index).find(".msg").animate({
            "margin-left": "-0"
        }, {
            easing: "ease-in",
            complete: function () {

            }
        })
    })
    $("li").tap(function () {
        $('li').eq($(this).index()).find(".msg").animate({
            "margin-left": "-0"
        }, {
            easing: "ease-in",
            complete: function () {}
        })
    })
}

function judge() {
    $("li").each(function () {
        if ($(this).data("top")) {
            $(this).css({
                backgroundColor: '#cfeefa',
            }).find(".stick").text("取消置顶")
        } else {
            $(this).css({
                backgroundColor: 'white',
            }).find(".stick").text("置顶")
        }
    })
}

function getindex() {
    var index = 0;
    $("li").each(function () {
        $(this).data("top") ? ++index : index;
    })
    return index + 1;
}

function init() {
    move();
    judge();
    $(".stick").on("touchstart", function () {
        var length = $(this).parents("ul").find("li").length;
        if ($(this).parent("li").data("top")) {
            $(this).parent("li").data("top", false)
            // var ind=getindex($(this).parent("li"))
            // console.log($(this).parent("li").data("init"))//原本的位置
            var ind = $(this).parents("ul").find("li").eq($(this).parent("li").data("init")).data("top") ? getindex() : $(this).parent("li").data("init");
            // console.log(ind)//计算后的位置
            if (ind < length) {
                $(this).parents("ul").find("li").eq(ind).before($(this).parent("li"))
            } else {
                $(this).parents("ul").append($(this).parent("li"))
            }

        } else {
            var _this = $(this).parent("li").data("top", true);
            $("li").eq(0).before(_this)
        }
        judge();
        // move();

    })
    $(".del").on("touchstart", function () {
        $(this).parent("li").remove()
    })
}
// $("li").swipeUp(function(){
//     console.log("up")
// })
// $("li").swipeDown(function(){
//     console.log("down")
// })

function pullDownAction() {
    var length = $("li").length
    setTimeout(function () { //模拟加载延迟的效果
        var str = "";
        for (i = 0; i < 3; i++) {
            str += `<li data-init=${length} data-top=false>
                    <div class="msg">
                        <div class="head" style="background-image: url('./img/1.jpg')"></div>
                    </div>
                    <p class="stick">取消置顶</p>
                    <p class="del">删除</p>
                </li>`;
            length++;
        }
        // console.log(str)
        $("ul")[0].innerHTML += str;
        myScroll.refresh();
        init();

    }, 1000);
}
var myScroll,
    pullDownEl, pullDownOffset,
    pullUpEl, pullUpOffset,
    generatedCount = 0;
//初始化绑定iScroll控件 
document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, false);
document.addEventListener('DOMContentLoaded', loaded, false);

function loaded() {
    pullDownEl = $('.pullDown');
    pullDownOffset = pullDownEl[0].offsetHeight;
    pullUpEl = $('.pullUp');
    pullUpOffset = pullUpEl[0].offsetHeight;
    // console.log(pullDownOffset, pullUpOffset)
    myScroll = new IScroll('#wrapper', {
        probeType: 2, //probeType属性，表明此插件，可以监听scroll事件
        //当probeType：2的时候，松开鼠标不会触发scroll事件
        //当probeType：3的时候，松开鼠标还会触发scroll事件
        // 开启滚轮控制功能
        mouseWheel: true,

        //true时，右侧显示滚动条， false: 不显示
        // scrollbars: false
    });
    myScroll.on('scroll', function () {
        // console.log("scroll");
        // console.log(this.y);  //-80
        // console.log(this.maxScrollY);  //-65
        if (this.y > 50) {
            // console.log('y>5无flip');
            $(".pullUp").find("span").text("松手开始更新...");
            $(".pullUp").find("img").css({
                "transform": "rotate(180deg) translateZ(0)",
            })
            //此时，可以发起ajax请求，请求新数据，重新渲染页面
        } else if (this.y < 50 && this.y > this.maxScrollY + 50) {
            $(".pullUp").find("span").text('下拉刷新...');
            $(".pullUp").find("img").css({
                "transform": "rotate(0deg) translateZ(0)",
            });
            // console.log('y<5有flip');

        } else if (this.y < this.maxScrollY + 50 && this.y > (this.maxScrollY - 50)) {
            // console.log(1)
            // console.log('y<-79无flip');
            $(".pullDown").find("span").text('上拉加载更多...');
            $(".pullDown").find("img").css({
                "transform": "rotate(180deg) translateZ(0)",
            })
        } else if (this.y < (this.maxScrollY - 50)) {
            // console.log(2)
            $(".pullDown").find("span").text('松手开始更新...')
            $(".pullDown").find("img").css({
                "transform": "rotate(0deg) translateZ(0)",
            });
        }
    });
    myScroll.on('scrollEnd', function () {

        // console.log($(".pullDown").find("span").text());
        if ($(".pullDown").find("span").text() == "松手开始更新...") {
            console.log(1)
            $(".pullDown").find("span").text('加载中...');
            pullDownAction();
            $(".pullDown").find("span").text('上拉加载更多...');

        }

    });
}