/**
 * Created by Administrator on 2017/3/5.
 */
var express = require('express');
var pageModel=require('../model/pageModel');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    pageModel.lover(function(love){
        pageModel.elder(function(elder){
            pageModel.immortal(function(immortal){
                res.render('page', {
                    title: '花之缘',
                    Love: love,
                    Elder:elder,
                    Immortal:immortal
                });
            })
        })
    })
});
module.exports = router;