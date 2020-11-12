var express = require('express');
var router = express.Router();
const users = require("./users")
const getList = require("./getList")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/",users)
router.use("/",getList)
module.exports = router;
