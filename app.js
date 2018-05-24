var express = require('express');
var path = require('path');
var jquery = require('jquery');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var users = require('./routes/users');
var optional=require('./routes/optional');
var page=require('./routes/page');

var guanzhu=require('./routes/guanzhu');

var Settlement=require('./routes/Settlement');
var flower=require('./routes/flower');
var elder=require('./routes/elder');
var flowerpage=require('./routes/flowerpage');
var flowerpot=require('./routes/flowerpot');
var loveflower=require('./routes/loveflower');
var breadcrumbs=require('./routes/breadcrumbs');
var immortalflower=require('./routes/immortalflower');
var login=require('./routes/login');
var zhuce=require('./routes/zhuce');
var order=require('./routes/order');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);//后缀ejs 转 html
//app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/optional',optional);
app.use('/page',page);

app.use('/guanzhu',guanzhu);

app.use('/flower',flower);
app.use('/elder',elder);
app.use('/order',order);
app.use('/Settlement',Settlement);
app.use('/flowerpage',flowerpage);
app.use('/flowerpot',flowerpot);
app.use('/loveflower',loveflower);
app.use('/login',login);
app.use('/zhuce',zhuce);
app.use('/breadcrumbs',breadcrumbs);
app.use('/immortalflower',immortalflower);
app.use('/select',index);
app.use('/insert',index);
app.use('/selectname',index);
app.use('/selectassess',index);
app.use('/insertassess',index);

app.use('/selectorder',index);
app.use('/insertorder',index);
app.use('/deleteorder',index);
app.use('/updateorder',index);

app.use('/jiesuan1',index);
app.use('/jiesuan2',index);

app.use('/Order',index);

app.use('/revoke1',index);
app.use('/revoke2',index);
app.use('/payment',index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
