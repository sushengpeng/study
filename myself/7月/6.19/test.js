var arr = [1,2,2,3,4]
var item =2
// 1
// function remove(arr,item){
//     const store=[]
//     arr.map(s=>{
//         if(s!=item){
//             store.push(s)
//         }else{
//             return arr
//         }
//     })
//     return store
// }

// 2
function remove(arr,item){
    const store =arr.filter((cur,index,arr)=>{
        return cur!=item 
    })
    return store
}
const newArr = remove(arr,item)
console.log(newArr) 
const fs = require('fs')
fs.open('/open/some/file.txt', 'r', (err, fd) => {
    if (err) throw err;
    fs.close(fd, (err) => {
      if (err) throw err;
    });
  });