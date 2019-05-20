var bar = document.getElementsByClassName("bar")[0];
var list = document.getElementsByClassName("list")[0];
var listlis = list.getElementsByTagName("li");
var blot = document.getElementsByClassName("blot")[0];
var blotlis = blot.getElementsByTagName("li");
var btn = document.getElementsByClassName("btn")[0];
var rightbtn = btn.getElementsByClassName("right")[0]; 
var leftbtn = btn.getElementsByClassName("left")[0];   
var cloneli = listlis[0].cloneNode(true);
var timeId;
var num = 0;
var time = 0; //用来计时
var blotindex = 0;
//使用事件委托点击后相应的图片出现


function Ban() {}
Ban.prototype = {
    setindex: function (ele) {
        for (var i = 0; i < ele.length; i++) {
            ele[i].index = i;
        }
    },
    resetstyle: function (ele) {
        for (var i = 0; i < ele.length; i++) {
            blotlis[i].className = "";
        }
        ele[blotindex].className = "active";
    },
    anmiatetion: function () {
        if (num > -2600) {
            list.style.transition = "";
            list.style.left = num + "px";
            // ban.cons();
            // console.log(this)
            this.resetstyle(blotlis);
            if (num % 520 == 0) {
                if (time != 200) {
                    time++;
                } else {
                    num -= 26;
                    time = 0;
                    if (blotindex >= 4) {
                        blotindex = 0;
                    } else {
                        blotindex++;
                    }
                }
            } else {
                num -= 26;
            }
        } else {
            num = 0;
        }
    },
    init: function () {
        this.setindex(blotlis);
        list.appendChild(cloneli);
        var _this = this;
        timeId = setInterval(function () {
            _this.anmiatetion();
        }, 16.67)
        blot.onclick = function (e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (target.tagName == "LI") {
                blotindex = target.index;
                num = -520 * target.index;
                list.style.left = num + "px";
                list.style.transition = "left 0.5s ease";
                _this.resetstyle(blotlis);
            }
        }
        bar.onmouseenter = function () {
            clearInterval(timeId);
            btn.style.display = "block";
        }
        bar.onmouseleave = function () {
            btn.style.display = "none";
            timeId = setInterval(function () {
                _this.anmiatetion();
            }, 16.67);
        }
        leftbtn.onclick = function () {
            if (blotindex == 0) {
                blotindex = 4;
            } else {
                blotindex--;
            }
            num = -520 * blotindex;
            list.style.left = num + "px";
            list.style.transition = "left 0.5s ease";
            _this.resetstyle(blotlis);
        }
        rightbtn.onclick = function () {
            if (blotindex == 4) {
                blotindex = 0;
            } else {
                blotindex++;
            }
            num = -520 * blotindex;
            list.style.left = num + "px";
            list.style.transition = "left 0.5s ease";
            _this.resetstyle(blotlis);
        }
    }
}
var ban = new Ban();
ban.init();