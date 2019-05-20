var myScroll,
    pullDownEl, pullDownOffset,
    pullUpEl, pullUpOffset,
    generatedCount = 0;

/** * 下拉刷新 （自定义实现此方法） 
* myScroll.refresh();  * // 数据加载完成后，调用界面更新方法 */

function pullDownAction() {
    // 此处省略ajax的加载
    myScroll.refresh();
}
function pullUpAction() {
    setTimeout(function () {  //模拟加载延迟的效果
        var el, li, i;
        el = document.getElementById('thelist');
        for (i = 0; i < 3; i++) {
            li = document.createElement('li');
            li.innerText = '添加商品 ' + (++generatedCount);
            el.appendChild(li, el.childNodes[0]);
        }
        myScroll.refresh();
    }, 1000);
}


/** * 初始化iScroll控件 */
function loaded() {
    pullDownEl = document.getElementById('pullDown');
    pullDownOffset = pullDownEl.offsetHeight;
    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;
    myScroll = new IScroll('#wrapper', {
        probeType: 2  //probeType属性，表明此插件，可以监听scroll事件
                      //当probeType：2的时候，松开鼠标不会触发scroll事件
                      //当probeType：3的时候，松开鼠标还会触发scroll事件
    });
    myScroll.on('refresh', function () {
        if (pullDownEl.className.match('loading')) {
            pullDownEl.className = '';
            pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
        } else if (pullUpEl.className.match('loading')) {
            // console.log('refresh-有loading');
            pullUpEl.className = '';
            pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
        }
        // console.log('refresh');
    });

    myScroll.on('scroll', function () {
        console.log("scroll");
        // console.log(this.y);  //-80
        // console.log(this.maxScrollY);  //-65
        if (this.y > 5 && !pullDownEl.className.match('flip')) {
            // console.log('y>5无flip');
            pullDownEl.className = 'flip';
            pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
            //此时，可以发起ajax请求，请求新数据，重新渲染页面
        } else if (this.y < 5 && pullDownEl.className.match('flip')) {
            pullDownEl.className = '';
            pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
            console.log('y<5有flip');
        } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
            console.log('y<-79无flip');
            pullUpEl.className = 'flip';
            pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
        } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
            console.log('y>-69有flip');
            pullUpEl.className = '';
            pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
        }
    });
    myScroll.on('scrollEnd', function () {
        console.log('scrollEnd');
        if (pullDownEl.className.match('flip')) {
            console.log('scrollEnd,pullDown有flip');
            pullDownEl.className = 'loading';
            pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
            pullDownAction();
        } else if (pullUpEl.className.match('flip')) {
            console.log('scrollEnd-pullUp有flip,要加载数据');
            pullUpEl.className = 'loading';
            pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
            pullUpAction();
        }
    });

}
//初始化绑定iScroll控件 
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', loaded, false); 

// document.onreadystatechange=function(){
//     if(document.readyState=="interactive"){
//         //操作dom
//         //资源不一定加载完毕
//         // var dom  =
//     }
// }
// window.onload = function(){
//     // dom可供操作
//     // 资源加载完毕的时候会触发
// }
// 下拉刷新思路：
// 1.鼠标下拉超过5px，则添加flip类，让图标旋转
// 2.下拉超过5px后松手，怎会触发scrollend，这时会有flip类，则开始加载数据，显示loading，加载完毕，loading消失
// 3.下拉超过5px后没有松手，又缓缓的将其送回小于5px的位置，则删除flip类，松手后不会加载数据，因为没有flip类

// 上拉加载思路
// 1.鼠标上拉超过5px，则添加flip类，让图标旋转
// 2.上拉超过5px后松手，怎会触发scrollend，这时会有flip类，则开始加载数据，显示loading，加载完毕，loading消失
// 3.上拉超过5px后没有松手，又缓缓的将其送回小于5px的位置，则删除flip类，松手后不会加载数据，因为没有flip类

