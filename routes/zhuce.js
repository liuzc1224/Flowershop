/**
 * Created by liu on 2017/4/15.
 */
var express = require('express');
var zhuceModel=require('../model/zhuceModel');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('zhuce', { title: '注册' });
});
module.exports = router;