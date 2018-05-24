/**
 * Created by liu on 2017/4/17.
 */
var express = require('express');
var orderModel=require('../model/orderModel');
var url = require('url');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var Id=url.parse(req.url).query.replace(/[^0-9]/ig,"");
    console.log(Id);
    orderModel.selectOrderAll(Id,function(order){
        res.render('order', { title: '购物车',Order:order });
    })
});
//router.post('/Order', function(req, res, next) {
//    var dat={
//        UserId:req.body.UserId
//    };
//    orderModel.selectOrderAll(dat,function(order){
//        res.render('order', { title: '购物车',Order:order });
//    })
//});
module.exports = router;