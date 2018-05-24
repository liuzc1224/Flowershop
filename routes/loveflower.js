/**
 * Created by Administrator on 2017/4/2.
 */
var express = require('express');
var loveflowerModel=require('../model/loveflowerModel');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    loveflowerModel.selectFlower(function(LoveflowerRows) {
        res.render('loveflower', {title: '爱情鲜花', Loveflowers: LoveflowerRows});
    });
});
//function cli(){
//    $('body').click(function(evt){
//        var tname;
//        if(!e){
//            var e = window.event || evt;
//        }
//        //获取事件点击元素
//        var targ = e.target;
//        //获取元素名称
//        tname = targ.parentNode.parentNode.childNodes[1].innerHTML;
//        console.log("图片",tname);
//        localStorage.id=tname;
//        window.location.href='breadcrumbs?usid='+tname;
//    })
//}
module.exports = router;