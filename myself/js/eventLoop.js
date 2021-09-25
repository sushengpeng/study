const func1 = () => {
  console.log("1")
}
const func2 = () => {
  console.log("2")
}
function eventLoop(){
  console.log('0')
  let timmer = setInterval(()=>{
    console.log("setInterval")
    clearInterval(timmer)
  })
  setTimeout(()=>{
    console.log("setTimeout")
  },1000)
  func1()
  new Promise((resolve,reject)=>{
    console.log("promise")
    resolve()
  }).then(()=>{
    console.log("then")
  })
  func2()
}

eventLoop()