var express = require('express');
const comment_controllers = require('../controllers/commen_controller')
let multer = require('multer');
let fs = require("fs");
let path = require("path");
var router = express.Router();
/* GET home page. */
router.get('/index', comment_controllers.get_fileist)
      .get('/', function (req, res, next) { res.render('index', { title: 'Express11' }); })
      .get('/file', comment_controllers.read_file)
      .post('/fileUpload', comment_controllers.upload_file)
      .get('/createFile',comment_controllers.create_file)
      .get('/login',comment_controllers.login)



module.exports = router;
