/**
 * Created by Administrator on 2017/4/4.
 */
var express = require('express');
var breadcrumbsModel=require('../model/breadcrumbsModel');
var url = require('url');
var jquery = require('jQuery');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var Id=url.parse(req.url).query.replace(/[^0-9]/ig,"");
    console.log(Id);
    breadcrumbsModel.selectFlowerInfo(Id,function(info){
        breadcrumbsModel.selectFlower(Id,function(ElderflowerRows) {
            var sub = ElderflowerRows[0]['ImgPath'];
            console.log(info.FlowerName);
            res.render('breadcrumbs',
                {
                    title: '鲜花商品',
                    Elderflowers: ElderflowerRows,
                    Img: sub.substring(0, sub.length - 10),
                    Name: info[0].FlowerName,
                    Typeid: info[0].Type,
                    Id: info[0].CommodityId,
                    material: info[0].FlowerMaterial,
                    packaging: info[0].FlowerPackag,
                    Flowers: info[0].Flower,
                    price:info[0].FlowerPrice
                }
            );
        });
    })
});
module.exports = router;
