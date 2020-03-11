var express = require('express');
const comment_controllers = require('../controllers/commen_controller')
var router = express.Router();
/* GET home page. */
router.get('/index', comment_controllers.get_fileist)
      .get('/', function (req, res, next) { res.render('index', { title: 'Express11' });})
      .get('/file', comment_controllers.read_file)
      .post('/fileUpload',comment_controllers.upload_file)

module.exports = router;
