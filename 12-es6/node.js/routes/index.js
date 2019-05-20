var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')
// 引入query
var query = require('../query')

/* GET home page. */
router.get('/', function(req, res, next) {
  var id =1
  // 生成sql
  var sql = "SELECT * FROM t_articles WHERE type_id=" + id + " LIMIT 0, 10"
  // 执行sql
  
  query(sql, function (result) {
    res.render('index', {lists: result})
  })
  console.log(req)
  // res.render('index', { title: '可以自动重启' });
});


router.get('/article/:id', function (req, res, next) {
  // 获取id
  var id = req.params.id
  // 查询数据库
  var sql = "SELECT * FROM t_articles WHERE id = " + id
  // 执行sql
  query(sql, function (results) {
    console.log(results)
    res.send(results)
  })

  // res.send('这是文章详情页')
})
router.get('/channel/:id', function (req, res, next) {
  /* 
    动态路由中的参数req.params
    params: { id: 'fdsagdsa' }
  
  */
  // 获取到url中的id
  var id =req.params.id
  // 生成sql
  var sql = "SELECT * FROM t_articles WHERE type_id=" + id + " LIMIT 0, 10"
  // 执行sql
  
  query(sql, function (result) {
    res.render('channel', {list: result})
  })
  console.log(req)
  // res.send('这是列表页')
})
//demo
router.get('/demo', function (req, res, next) {
  // 如果访问到则去请求后台数据接口
  /* fetch('http://localhost/getarticle.php').then(result => result.json()).then(result => {
    console.log(result)
    res.send(result)
  }) */

  fetch('http://localhost/getarticle.php').then(function (data) {
    // 这个data是fetch请求的结果
    return data.json()
  }).then(function (data) {
    // 这个data是上一个.then中得返回的数据
    console.log(data)
    res.send(data)
  })
})
module.exports = router;