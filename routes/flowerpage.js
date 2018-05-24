/**
 * Created by Administrator on 2017/4/2.
 */
var express = require('express');
var flowerpageModel=require('../model/flowerpageModel');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    flowerpageModel.selectFlower(function(flowerRows){
        res.render('flowerpage', { title: '鲜花',Flowers:flowerRows});
    });
});

module.exports = router;