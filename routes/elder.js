/**
 * Created by liu on 2017/4/11.
 */
var express = require('express');
var elderModel=require('../model/elderModel');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    elderModel.selectFlower(function(ElderflowerRows) {
        res.render('elder', {title: '长辈鲜花', Elderflowers: ElderflowerRows});
    });
});

module.exports = router;