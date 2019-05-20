function createHTML (arr) {
  // 将传入的数组变成li的形式
  const html = arr.map(item => '<li>' + item + '</li>').join('')
  return html
}

// module.exports = createHTML
// export default createHTML
export {createHTML}
