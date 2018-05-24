/**
 * Created by Administrator on 2017/4/2.
 */
var express = require('express');
var flowerpotModel=require('../model/flowerpotModel');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    flowerpotModel.selectAll(function (flowerRows) {
        res.render('flowerpot', {title: '精美花盒', Flowerpot: flowerRows});
    });
});

module.exports = router;