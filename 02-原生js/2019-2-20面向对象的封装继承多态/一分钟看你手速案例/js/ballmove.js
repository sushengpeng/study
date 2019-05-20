/*
* @Author: Administrator
* @Date:   2017-09-27 13:01:32
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-14 13:20:44
*/


function Ball(){
}
Ball.prototype = {
	getRnd : function(start,end){
        return  Math.floor(Math.random()*(end - start + 1)) + start;  
    },
	moveToTop : function(obj){
		setInterval(function(){
			obj.style.top = obj.offsetTop - 1 +"px";
		},10)
	},
	addStyle : function(obj,options){
		for(var attr in options){
            obj.style[attr] = options[attr];
        }
	},
	init: function(con,color,left){
			var ele = document.createElement("p");
			con.appendChild(ele);
			this.addStyle(ele,{
				backgroundImage : "url(images/" + color + ".png)",
				left : left + "px"
			});
			this.moveToTop(ele);
	}
}


// 裁判对象
function Referee(obj){
	this.result = 0;   //分数
	this.msg = obj.showMsg;      //成绩显示框
	this.container = obj.container;    //整个游戏容器 
	this.resultBox = obj.showResultBox;    //结果显示框
	this.resultBoxChild = obj.showResultBox.children[0];  //结果内容显示框
	this.ball = new Ball();
}
// 裁判说开始后，定时器在自动初始化一个气球
Referee.prototype.start = function(){
		var t = 0,_timer;
		var _this =this;
		_timer = setInterval(function(){
			var color = _this.ball.getRnd(1,4),
			left = _this.ball.getRnd(0,1880);
			_this.ball.init(_this.container,color,left);
			t++;
			if(t>=120){
				clearInterval(_timer);
				_this.container.innerHTML = "";
				_this.resultBox.style.display = "block";
				if (_this.result >= 80){
					_this.resultBoxChild.innerHTML = "You Win!";
				}else{
					_this.resultBoxChild.innerHTML = "You Lose!";
				}

			}
			_this.msg.innerHTML = "你一共用了" + Math.floor(t/2) +"秒击破了" + _this.result + "个气球";
			// console.log(t);
		
		},500)

		
		//点击打破这个气球
		this.container.onclick = function(e){
			var e = e || event;
			var target = e.target || e.srcElement;
			if (target.tagName == "P"){
				_this.judge(target);
			}
		}
}

// 裁判判决分数
Referee.prototype.judge =function(obj){
	console.log(this.result)
	this.result++;
	this.container.removeChild(obj);
	
}



function start(){
	var opt = {showResultBox:document.querySelector(".result")
	,showMsg:document.querySelector(".msg"),
	container:document.querySelector(".box")};

	var r = new Referee(opt);
	r.start();
}
start();