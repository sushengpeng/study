const https = require("https")
const index = require("../config/index")
const request = (params, methods) => {
  const options = {
    hostname: index.request_url,
    port: 443,
    path: '/',
    method: methods,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };
  https.request(index.request_url,)
}
export default request