// position.js
/* eslint-disable */
const initDom = () => {
  document.onmousedown = (e) => {
    e = e || window.event
    if (e.shiftKey && e.button === 0) {
      e.preventDefault()
      sendRequestToOpenFileInEditor(getFilePath(e))
    }
  }
}

const getFilePath = (e) => {
  let element = e
  if (e.target) {
    element = e.target
  }
  if (!element || !element.getAttribute) return null
  if (element.getAttribute('_vc-path')) {
    return element.getAttribute('_vc-path')
  }
  return this.getFilePath(element.parentNode)
}

const sendRequestToOpenFileInEditor = (filePath) => {
  const protocol = window.location.protocol
    ? window.location.protocol
    : 'http:'
  const hostname = window.location.hostname
    ? window.location.hostname
    : 'localhost'
  const port = 9001
  // fetch('${SharedData.openInEditorHost}__open-in-editor?file=${encodeURI(file)}')
  let url = `${protocol}//${hostname}:${port}?file=${filePath}`
  fetch(url)
    .catch((error) => {
      console.log(error)
    })
}

export default initDom