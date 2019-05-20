//tab切换
var lis = document.getElementsByClassName("productionnav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
var imgs = document.getElementsByClassName("productionimg")[0].getElementsByClassName("img")[0].getElementsByTagName("ul");
lis[1].style.backgroundColor = "#fef164";
lis[1].style.color = "black";
lis[1].style.border = "1px solid #fef164";
for (var i = 0; i < lis.length; i++) {

    lis[i].onmouseover = function () {
        for (var j = 0; j < lis.length; j++) {
            lis[j].style.backgroundColor = "transparent";
            lis[j].style.color = "white";
            lis[j].style.border = "1px solid white";
        }
        this.style.backgroundColor = "#fef164";
        this.style.color = "black";
        this.style.border = "1px solid #fef164";
        var num = parseInt(this.getAttribute("index"));
        // console.log(imgs[num]);
        for (var j = 0; j < lis.length; j++) {
            imgs[j].style.display = "none";
        }
        imgs[num].style.display = "block";
    }
    // lis[i].onmouseleave=function(){

    //     this.style.backgroundColor="#fef164";
    //     this.style.color="black";
    //     this.style.border="1px solid #fef164";
    // }
}

//鼠标放到图标上后显示蒙版
var changes = document.getElementsByClassName("change");
// console.log(changes);
for (var i = 0, len = changes.length; i < len; i++) {
    changes[i].onmouseover = function () {
        if (document.getElementsByClassName("mask1").length == 0) {
            var mask1 = document.createElement("div");
            mask1.className = "mask1";
            this.appendChild(mask1);
        }
    }
    changes[i].onmouseleave = function () {
        var mask1 = document.getElementsByClassName("mask1")[0];
        this.removeChild(mask1);
    }
}
//textarea
var textarea = document.getElementsByTagName("textarea")[0];
textarea.innerText = "请输入你的留言内容:";
//点击touch后mask显示,点击mask后mask隐藏
var bottommask = document.getElementsByClassName("mask")[0];
var inputs = document.getElementsByTagName("input");
var textarea = document.getElementsByTagName("textarea")[0];
inputs[0].onclick = function (e) {
    e = e || window.event;
    stopBubble(e);
    inputs[0].value = "";
    bottommask.style.backgroundColor = "rgba(1,1,1,0.3)";
}
inputs[1].onclick = function (e) {
    e = e || window.event;
    stopBubble(e);
    inputs[1].value = "";
    bottommask.style.backgroundColor = "rgba(1,1,1,0.3)";
}
textarea.onclick = function (e) {
    e = e || window.event;
    stopBubble(e);
    textarea.innerText = "";
    bottommask.style.backgroundColor = "rgba(1,1,1,0.3)";
}
bottommask.onclick = function () {
    // console.log(1);
    inputs[0].value = "    姓名:";
    inputs[1].value = "    联系方式:";
    textarea.innerText = "请输入你的留言内容:";
    bottommask.style.backgroundColor = "rgba(1,1,1,0)";
}
//阻止冒泡
function stopBubble(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}
//button提交
var but = document.getElementsByTagName("button")[0];
but.onclick = function () {
    alert("提交成功");
}
//创意中li hover的时候蒙版出现
var plus = document.getElementsByClassName("creativelist")[0].getElementsByTagName("li");
var timeId;
var plusmask = document.getElementsByClassName("plus1");
for (var i = 0; i < plus.length; i++) {
    plus[i].onmouseover = function (e) {
        clearInterval(timeId);
        var h = -296;
        e = e || window.event;
        var target = e.target || e.srcElement;
        console.log(plus[i])
        // timeId = setInterval(function (target) {
        //     if (h <= 0) {
        //         plusmask[].style.top = h + "px";
        //         console.log(h)
        //         h += 3;
        //     } else {
        //         clearInterval(timeId);
        //     }
        // }, 26.67)
    }
}