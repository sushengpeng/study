let urlAnaylais = (config) => {
  let location = window.location
  //判断是否是hash还是history模式
  let isHash = location.hash.indexOf("#/") === 0
  if (isHash) {
    // /#/axiosCancel/test?asdfa=111 => axiosCancel/test
    return { path: location.hash.slice(2).split("?")[0], ...config }
  } else {
    return { path: location.pathname.slice(2).split("?")[0], ...config }
  }
}

export default urlAnaylais