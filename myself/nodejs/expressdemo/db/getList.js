const query = require('./index')
class getList {
  constructor(){}
  static shop_list(page=1,number=5,sort=0){
    const _sql = `SELECT * FROM t_itemList ORDER BY price ${sort=='0'?'ASC':'DESC'} LIMIT ${(page-1)*number},${number}`
    console.log(_sql)
    return query(_sql)
  }
}
module.exports = getList