
// position-plugin.js
/* eslint-disable */
const http = require('http')
const child_process = require('child_process')

class codePositionServer {
  constructor(options) {
    this.options = options
    this.server = null
  }

  apply(compiler) {
    // 挂在一个钩子
    // [
    //   'resolveStep',
    //   'noResolve',
    //   'resolve',
    //   'result',
    //   'internalResolve',
    //   'newInternalResolve',
    //   'parsedResolve',
    //   'describedResolve',
    //   'rawResolve',
    //   'normalResolve',
    //   'internal',
    //   'rawModule',
    //   'module',
    //   'resolveAsModule',
    //   'undescribedResolveInPackage',
    //   'resolveInPackage',
    //   'resolveInExistingDirectory',
    //   'relative',
    //   'describedRelative',
    //   'directory',
    //   'undescribedExistingDirectory',
    //   'existingDirectory',
    //   'undescribedRawFile',
    //   'rawFile',
    //   'file',
    //   'finalFile',
    //   'existingFile',
    //   'resolved',
    //   'newInteralResolve'
    // ]
    // console.log(Object.keys(compiler.hooks.done))
    compiler.hooks.done.tap('codePositionServer', compilation => {
      // console.log(111)
      const { port } = this.options
      if (this.server) return
      this.server = http.createServer((req, res) => {
        const code = req.url.split('?')[1]
        if (code.length) {
          const path = code.split('=')[1]
          if (path) {
            child_process.exec('code -r -g ' + path)
          }
        }
      })
      this.server.listen(port, () => {
        console.log(`codePositionServer started on port ${port}`);
      })
    })
  }
}

module.exports = codePositionServer
