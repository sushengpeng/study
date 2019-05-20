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