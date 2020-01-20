//    let foo = {a:1,b:2};
//    let bar = {a:3,c:3,d:5,...foo};
//    console. log(bar);
//    let [x, y = 'b'] = ['a'];
//    console. log(x,y);
//    console. log([[1, 2],[3, 4]].map(([a, b]) =>a+b))

//    let obj1 = {a:1, b:2}
//    let obj2 = {...obj1, c:3};
//    obj1.c = 3;
//    console. log(JSON.stringify(obj1) === JSON.stringify(obj2))
//    console. log(obj1 === obj2)
//二维数组

// console.log(arr.length)
//x纵向数目 x=arr.length
//y横向数目 y=Math.max.apply(null,[...arr.map(item=>item.length)])
// console.log(arr[0][0])//0 1
// console.log(arr[1][0])//1 2
// console.log(arr[0][1])//  5
// console.log(arr[2][0])//2 3
// console.log(arr[1][1])//  6
// console.log(arr[0][2])//  9
// console.log(arr[3][0])//3
// console.log(arr[2][1])
// console.log(arr[1][2])
// console.log(arr[0][3])
// console.log(arr[3][4]) //7
let arr = [[1,5,'',9,13],[2,6,'',10,14],[3,7,'',11,15],[4,8,'',12,16]]
function arrayprint(arr){
    let x=arr.length
    let y=Math.max.apply(null,[...arr.map(item=>item.length)])
    let sum =x+y-2
    let array=[]
    for(let num=0;num<=sum;num++){
        for(let i=0;i<=num;i++){
            if(num-i<x&&i<y){
                // console.log(num-i,i)
                // console.log(arr[num-i][i])
                array.push(arr[num-i][i])
            }
        }
    }
    console.log(array)
}
arrayprint(arr)
