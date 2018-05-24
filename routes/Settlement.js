/**
 * Created by liu on 2017/4/18.
 */
var express = require('express');
var orderModel=require('../model/orderModel');
var url = require('url');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var Id=url.parse(req.url).query.replace(/[^0-9]/ig,"");
    orderModel.selectMoneyno(Id,function(money){
        orderModel.selectMoneyyes(Id,function(history) {
            orderModel.selectMoneyAll(function (info) {
                res.render('Settlement', {title: '订单', Moneys: money, Info: info,Hist:history});
            });
        });
        //res.render('Settlement', { title: '订单',Moneys:money});
    });
    //res.render('Settlement', { title: '订单',})
});

module.exports = router;