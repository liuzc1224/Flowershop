var express = require('express');
var loginModel=require('../model/loginModel');
var zhuceModel=require('../model/zhuceModel');
var orderModel=require('../model/orderModel');
var router = express.Router();

/* GET home index. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '花之缘' });
});
/*登录*/
router.post('/select',function(req, res) {
  var dat={
    userName:req.body.userName,
    Password:req.body.Password
  }
  loginModel.selectUser(dat,function(result){
    console.log(result,"654654654654");
    res.send(result);
  })
});
/*登录end*/
/*注册*/
router.post('/insert', function(req,res) {
  var dat = {
    userName: req.body.userName,
    Password: req.body.Password
  };
  zhuceModel.insertUser(dat, function(result) {
    res.send(result);
  });
});
router.post('/selectname', function(req, res) {
  var dat = {
    userName:req.body.userName
  };
  zhuceModel.selectUser(dat,function(result){
    res.send(result);
  })
});
/*注册end*/
/*关注*/
router.post('/selectassess', function(req, res) {
  var dat = {
    UserId:req.body.uid,
    CommodityId:req.body.id
  };
  loginModel.selectassess(dat,function(result){
    res.send(result);
  })
});
router.post('/insertassess', function(req, res) {
  var dat = {
    UserId:req.body.uid,
    CommodityId:req.body.id
  };
  loginModel.insertassessr(dat,function(result){
    res.send(result);
  })
});
/*关注End*/
/*购物车*/
router.post('/selectorder', function(req, res) {
  var dat = {
    UserId:req.body.uid,
    CommodityId:req.body.id
  };
  orderModel.selectOrder(dat,function(result){
    res.send(result);
  })
});

router.post('/insertorder', function(req, res) {
  var dat = {
    UserId:req.body.uid,
    CommodityId:req.body.id
  };
 orderModel.insertOrder(dat,function(result){
    res.send(result);
  })
});
router.post('/deleteorder', function(req, res) {
  var dat = {
    UserId:req.body.UserId,
    CommodityId:req.body.CommodityId
  };
  orderModel.deleteOrder(dat,function(result){
    res.send(result);
  })
});
router.post('/updateorder', function(req, res) {
  var dat = {
    UserId:req.body.uid,
    CommodityId:req.body.id,
    Number:req.body.Number
  };
  orderModel.setOrder(dat,function(result){
    res.send(result);
  })
});
/* 购物车提交*/
router.post('/jiesuan1', function(req, res) {
  var dat = {
    UserId:req.body.UserId,
    CommodityId:req.body.CommodityId,
    OrderId:req.body.OrderId
  };
  orderModel.jiesuan1(dat,function(result){
    res.send(result);
  })
});
router.post('/jiesuan2', function(req, res) {
  var dat = {
    UserId:req.body.UserId,
    OrderTime:req.body.OrderTime,
    OrderId:req.body.OrderId,
    OrderPrice:req.body.OrderPrice,
  };
  orderModel.jiesuan2(dat,function(result){
    res.send(result);
  })
});
/*购物车提交End*/
/*购物车End*/
/*订单*/
/*撤销*/
router.post('/revoke1', function(req, res) {
  var dat = {
    UserId:req.body.UserId,
    OrderId:req.body.OrderId,
  };
  console.log(dat);
  orderModel.revoke1(dat,function(result){
    res.send(result);
  })
});
router.post('/revoke2', function(req, res) {
  var dat = {
    UserId:req.body.UserId,
    OrderId:req.body.OrderId,
  };
  console.log(dat);
  orderModel.revoke2(dat,function(result){
    res.send(result);
  })
});
/*提交*/
router.post('/payment', function(req, res) {
  var dat = {
    UserId:req.body.UserId,
    OrderId:req.body.OrderId,
    OrderTime:req.body.OrderTime
  };
  console.log(dat);
  orderModel.payment(dat,function(result){
    res.send(result);
  })
});
/*订单END*/
module.exports = router;
