/**
 * Created by Administrator on 2017/3/5.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Optional', { title: '鲜花自选' });
});

module.exports = router;