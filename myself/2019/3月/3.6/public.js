//leftTrim() 
// 去除左边的空格
function leftTrim(str){
    while(str.indexOf(" ")==0){
        str=str.replace(" ","")
    }
    return str;
}

// rightTrim()
// 去除右边的空格
function rightTrim(str){
    while(str.lastIndexOf(" ")==str.length-1){
        str=str.slice(0,-1);
    }
    return str;
}  

//trim()
//去除两边的空格
//兼容ie7，8
function trim(str){
    str = leftTrim(str)
    str = rightTrim(str);
    return str;
}

//查找节点
//在父元素中查找第一个子元素
function getFirstElement(parent){
    //在parent中查找节点，直到找到元素节点为止
    var children = parent.childNodes;
    for(var i=0;i<children.length;i++){
        if(children[i].nodeType=="1"){
            return children[i];
        }
    }
    return null;
}
//在父元素中查找最后一个子元素
function getLastElement(parent){
    //在parent中查找节点，直到找到元素节点为止
    var children = parent.childNodes;
    for(var i=children.length-1;i>=0;i--){
        if(children[i].nodeType=="1"){
            return children[i];
        }
    }
    return null;
}
// 同children属性，但是兼容性好
//兼容ie7,8
function getChildElements(par){
    var collection = par.children,temp = [];
    for(var i=0,len = collection.length;i<len;i++){
        if(collection[i].nodeType == 1){
            temp.push(collection[i])
        }
    }
    return temp;      
}
//找前一个兄弟元素节点
function getPreviousElement(sibling){

    // sibling.previousSibling     判读是不是元素节点   true  return  false  继续找
    // sibling.previousSibling.previousSibling     判读是不是元素节点   true  return  false  继续找

    while(sibling.previousSibling){
        if(sibling.previousSibling.nodeType == 1){
            return sibling.previousSibling;
        }
        sibling = sibling.previousSibling;
    }
    return null;
}
//找后一个兄弟元素节点
function getNextElement(sibling){
    while(sibling.nextSibling){
        if(sibling.nextSibling.nodeType == 1){
            return sibling.nextSibling;
        }
        sibling = sibling.nextSibling;
    }
    return null;
}

//通过ele找祖先，直到找到类名为cName的元素为止
function getClosestParent(ele,cName){
    // ele.parentNode   .className.indexOf(cName)>-1   return       ==-1    继续找
    while(ele.parentNode){
        if(ele.parentNode.className.indexOf(cName)>-1){
            return ele.parentNode;
        }
        ele = ele.parentNode;
    }
    return null;
}
//兼容ie7,8注册事件
function addEvent(dom,eventType,handler){
    if(dom.attachEvent){
        dom.attachEvent("on"+eventType,handler)
    }else{
        dom.addEventListener(eventType,handler)
    }
}
//移除事件监听
function removeEvent(dom,eventType,handler){
    if(dom.removeEventListener){
        dom.removeEventListener(eventType,handler,false)
    }else{
        dom.detachEvent("on"+eventType,handler);
    }
}


//阻止事件冒泡
function stopBubble(e){
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }

    // 以下是错误写法
    // console.log(e.cancelBubble);
    // if(e.cancelBubble){
    //     e.cancelBubble = true;
    // }else{
    //     e.stopPropagation();
    // }
}
// 动画函数
function animate(dom,attr,end,time){
    var attrValue = window.getComputedStyle(dom,null)[attr];    //200px
    var start = parseFloat(attrValue);    //200
    var dw = attrValue.replace(start,"");
    var n = time/1000*60;   //次数
    var step = (end-start)/n;   //步长
    // console.log(dw);
    var timmerId = setInterval(function(){
        start = start + step;
        dom.style[attr]=start+dw;
        
        // start>=end    start<=end
        // step>0?start>=end:start<=end
        if(step>0?start>=end:start<=end){
            dom.style[attr]=end+dw;
            clearInterval(timmerId);
        }

    },1000/60)
}
//获取相对于文档的偏移量
function getOffsetPosition(dom){
    // console.log(dom.offsetParent)
    var l=0,t=0;
    t+= dom.offsetTop;
    l+= dom.offsetLeft;
    while(dom.offsetParent){
        t+=dom.offsetParent.offsetTop;
        t+=dom.offsetParent.clientTop;

        l+= dom.offsetParent.offsetLeft;
        l+=dom.offsetParent.clientLeft;

        dom = dom.offsetParent;
    }


    return {left:l,top:t};
}

//获取页面中传递过来的查询字符串
function getSearch(param){
    var str = location.search;
    str = str.substring(1);
    var arr = str.split("&");
    for(var i=0;i<arr.length;i++){
        var paras = arr[i].split("=");
        if(paras[0]==param){
            return paras[1];
        }
    }
}

function ajax(option){
    var xhr = new XMLHttpRequest();

    var type = option.type || "GET";
    if(type=="GET"){
        xhr.open("GET",option.url+"?"+option.param);
        xhr.send();
    }else{
        xhr.open("POST",option.url);
        if(option.contenttype){
            // xhr.setRequestHeader("content-type","multipart/form-data");
        }else{
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        }     
        xhr.send(option.param);
    }
    xhr.onreadystatechange = function(){
        if(xhr.status==200 && xhr.readyState==4){
            var data = xhr.responseText;
            option.success(data);
        }
    }
}

function jsonp(option){
    var script = document.createElement("script");
    script.src=option.url+"?"+option.data;
    //变量的提升，将callback属性作为全局变量，指向了jsonpcallback
    window["callback"] = option.jsonpcallback;
    document.body.appendChild(script);
    script.parentNode.removeChild(script);
}