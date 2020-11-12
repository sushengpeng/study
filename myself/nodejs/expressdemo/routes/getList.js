var express = require('express');
const shop_controlers = require("../controllers/shop_controllers")
var router = express.Router();
/* GET shopList. */
router.post('/getList', shop_controlers.get_shop_list);
module.exports = router;
