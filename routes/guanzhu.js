/**
 * Created by Administrator on 2017/3/5.
 */
var express = require('express');
var orderModel=require('../model/orderModel');
var url = require('url');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var Id=url.parse(req.url).query.replace(/[^0-9]/ig,"");
    console.log(Id);
    orderModel.guanzhu(Id,function(info){
        res.render('guanzhu',{title: '我的关注', Flowers: info,leng:info.length})
    })
});

module.exports = router;
