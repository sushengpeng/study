
// document.write("1.求1 * 2 * 3 * 4 * ... * 19 * 20的结果?(即20的阶乘)");
// document.write("<br>");
// var i=1,multi=1;
// for(;i<=20;i++){
//     multi=multi*i;
// }
// document.write(multi);
// document.write("<br>");

// document.write("2.求2！+3！+4！+5！+6！+7！+8！的和");
// document.write("<br>");
// for(var i=2,sum=0;i<=8;i++){
//     for(var a=1,j=1;j<=i;j++){
//         a=a*j;
//     }
//     sum=sum+a;
// }
// document.write(sum);
// document.write("<br>");


// document.write("3.求1+2+4+5+7+8+10+11+13+14+16+17+19...+100的和");
// document.write("<br>");
// for(var i=1,sum=0;i<=100;i+=3){
//     sum=i+sum;
// }
// for(var j=2;j<=98;j+=3){
//     sum=j+sum;
// }
// document.write(sum);
// document.write("<br>");


// document.write("4.编程将所有“水仙花数”打印出来，并打印其总个数。 “水仙花数”是一个各个位立方之和等于该整数的三位数(个位数立方 + 十位数立方 + 百位数立方 = 这个整数)");
// document.write("<br>");
// for(var i=100;i<=999;i++){
//     var a,b,c,sum;
//     a=Math.floor(i/100);
//     b=Math.floor((i-100*a)/10);
//     c=(i-100*a)-10*b;
//     sum=a*a*a+b*b*b+c*c*c;
//     if(sum==i){
//         document.write(i);
//         document.write("<br>");
//     }
// }
// document.write("<br>");

// document.write("5.求任意一个小于100000的正整数的位数，并逆序打印每一位数字");
// var random=prompt("请输入一个小于100000的任意正整数");
// while(random>100000){
//     random=prompt("请输入一个小于100000的任意正整数");
// }
// var length=random.length;
// var beatles=Array(length);
// document.write("<br>");
// document.write("该数的位数为"+length);
// document.write("<br>");
// random=parseInt(random);
// for(var i=0;i<=length;i++){
//     var pow,a;
//     pow=Math.pow(10,length-i);
//     a=Math.floor(random/pow);
//     random=random-pow*a;
//     beatles[i]=a;
//     document.write(beatles[i]);
// }
// // for(;i>1;i--){
// //     document.write(beatles[i-1]);
// //     document.write("<br>");
// // }
// // document.write(beatles[5]);
// // document.write(beatles[4]);
// // document.write(beatles[3]);
// // document.write(beatles[2]);
// // document.write(beatles[1]);



// // 乘法口诀表
// document.write("6.乘法口诀表");
// document.write("<table>");
// var multi=0;
// for(var a=1;a<=9;a++){
//     document.write("<tr>");
//     for(var b=a;b<=9;b++)
//     {
//         multi=a*b;
//         document.write("<td>");
//         document.write(a+"*"+b+"="+multi);
//         // document.write(" ");
//         document.write("</td>");
//         continue;
//     }
//     document.write("</tr>");
//     // document.write("<br>");
// }
// document.write("</table>");

// document.write("<table>");
// var multi=0;
// for(var a=1;a<=9;a++){
//     document.write("<tr>");
//     for(var b=1;b<=a;b++)
//     {
//         multi=a*b;
//         document.write("<td>");
//         document.write(a+"*"+b+"="+multi);
//         // document.write(" ");
//         document.write("</td>");
//         continue;
//     }
//     document.write("</tr>");
//     // document.write("<br>");
// }
// document.write("</table>");


// document.write("7.求x，y，z中的最大值（数字任意给）");
// var  x=prompt("请输入x的值");
// var y=prompt("请输入y的值");
// var z=prompt("请输入z的值");
// var max;
// x=parseInt(x);
// y=parseInt(y);
// z=parseInt(z);
// max=(x>y?x:y);
// max=(max>z?max:z);
// document.write("<br>");
// document.write("最大值为"+max);
// document.write("<br>");


// document.write("8.任意给x,y,z,从大到小排序");
// var  x=prompt("请输入x的值");
// var y=prompt("请输入y的值");
// var z=prompt("请输入z的值");
// var m;
// x=parseInt(x);
// y=parseInt(y);
// z=parseInt(z);
// var beatles=Array(x,y,z);
// for(var i=0;i<beatles.length-1;i++){
//     for(var j=0;j<beatles.length-i;j++){
//         if(beatles[i]<beatles[j+1]){
//             m=beatles[i];
//             beatles[i]=beatles[j+1];
//             beatles[j+1]=m;
//         }
//     }
// }
// for(i=0;i<beatles.length;i++){
//     document.write(beatles[i]);
//     document.write("<br>");
// }
// document.write("<br>");


// document.write("10.有一分数序列：2/1，3/2，5/3，8/5，13/8，21/13...求出这个数列的前20项之和。");
// var sum=0,a=2,b=1;
// for(var i=1;i<=20;i++){
//     sum=a/b+sum;
//     b=a;
//     a=a+b;
// }
// document.write(sum);
// document.write("<br>");


// document.write("11.判断一个数字是不是素数");
// var a = parseInt(prompt("请输入一个数字"));
// for (var i = 2; i < a; i++) {
//     if (a % i == 0) {
//         document.write(a + "不是一个素数")
//         break;
//     }
// }
// if (a == i) {
//     document.write(a + "是一个素数");
// }
// document.write("<br>");
// document.write("12.利用条件运算符的嵌套来完成此题：学习成绩>=90分的同学用A表示，60-89分之间的用B表示，60分以下的用C表示。1.程序分析：(a>b)?a:b这是条件运算符的基本例子。");
// var score=parseInt(prompt("输入分数")),level;

// level=(score>60)?(level=(score>89)?"A":"B"):"C";

// document.write(level);


// document.write("13。求s=a+aa+aaa+aaaa+aa...a的值，其中a是一个数字。例如2+22+222+2222+22222(此时共有5个数相加)，几个数相加由用户输入(prompt)");
// var s=0,a=parseInt(prompt("请输入a的数值")),b=parseInt(prompt("请输入a的个数"));
// var c=a;
// for(var i=1;i<=b;i++){
//     s=s+a;
//     a=10*a+c;
// }
// document.write("<br>");
// document.write(s);
// document.write("<br>");

document.write("14.一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，求它在第10次落地时，共经过多少米？第10次反弹多高？"+"<br>");
var h=50,distance=100;
// 1;distance=100
// 2;distance=100+100 h2=50
// 3;distance=100+100+50 h3=25
// 4;distance=100+50+50+12.5+12.5 h4=12.5
for(var i=2;i<=10;i++){
    distance=distance+h*2;
    document.write("第"+i+"次落地的距离为"+distance+"<br>");
    h=h/2;
    document.write("第"+i+"次回弹的高度为"+h+"<br>");

}

// document.write("14.猴子吃桃问题：猴子第一天摘下若干个桃子，当即吃了一半，还不瘾，又多吃了一个 第二天早上又将剩下的桃子吃掉一半，又多吃了一个。以后每天早上都吃了前一天剩下的一半零一个。到第10天早上想再吃时，见只剩下一个桃子了。求第一天共摘了多少。 程序分析：采取逆向思维的方法，从后往前推断。"+"<br>");
// var day=10,number=1;
// for(;day>0;day--){
//     document.write("第"+day+"天的桃子数为"+number+"<br>");
//     number=(number+1)*2;
// }