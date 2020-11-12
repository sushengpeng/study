
const Result = require("../utils/result")
const https = require("https")
const get_manageMoney_list = async (req, res, next) => {
  const options = {
    hostname: 'encrypted.google.com',
    port: 443,
    path: '/',
    method: 'GET'
  };
  try {
  } catch (error) {
    res.send(new Result("", { statusCode: "000001" }).fail())
    throw error
  }
}

module.exports = {
  get_shop_list
}