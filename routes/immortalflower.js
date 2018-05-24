/**
 * Created by Administrator on 2017/4/8.
 */
var express = require('express');
var immortalflowerModel=require('../model/immortalflowerModel');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    immortalflowerModel.selectFlower(function(flowerRows) {
        res.render('immortalflower', {title: '永生花', Immortalflowers: flowerRows});
    });
});

module.exports = router;