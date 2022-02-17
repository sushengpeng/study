let _pro = ()=>{
  return Promise.resolve({a:111})
}
let _pro1 = _pro().then(res=>{
  console.log(res)
  return 222
})
_pro1.then(res=>{
  console.log(res);
})