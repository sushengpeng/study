var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var multer = require('multer')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fs = require('fs')
var app = express();
var objMulter = multer({ dest: './dist' });
//设置上传的的图片保存目录
app.use(objMulter.any());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(logger('dev'));
// setup the logger
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

<<<<<<< HEAD
const log4js = require("./logs/log"),
  logger = log4js.getLogger("info")

logger.info("现在时间：", new Date().toLocaleString())
logger.trace("现在时间：", new Date().toLocaleString())
logger.debug("现在时间：", new Date().toLocaleString())
logger.info("现在时间：", new Date().toLocaleString())
logger.warn("现在时间：", new Date().toLocaleString())
logger.error("现在时间：", new Date().toLocaleString())
logger.fatal("现在时间：", new Date().toLocaleString())
//日志输出
=======
const log4js = require('./logs/log')
const logger = log4js.getLogger('console');
console.log = logger.info.bind(logger); // do the same for others - console.debug, etc.
>>>>>>> 9dbeedf8f6a65aa53f86156304f3e84f0c7c8041
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
