const getList = require('../db/getList')
const Result = require("../utils/result")
const get_shop_list = async (req, res, next) => {
  const { page, number, sort } = req.body
  // console.log(req.body)
  try {
    const shopList = await getList.shop_list(page, number, sort)
    res.send(new Result(shopList).success())
  } catch (error) {
    res.send(new Result("", { statusCode: "000001" }).fail())
    throw error
  }
}

module.exports = {
  get_shop_list
}