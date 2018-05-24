/**
 * Created by liu on 2017/4/17.
 */
/**
 * Created by Administrator on 2017/4/7.
 */
var mysql = require('mysql');
var DBSet = require('./DBSet');
module.exports ={
    selectOrderAll:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('select commodity.CommodityId,ImgPath,FlowerName,FlowerPrice,ord.Number from commodity,' +
                    '(select CommodityId,Number from orderInfo where orderInfo.UserId="'+dat+'" and orderInfo.OrderId is null) ' +
                    'as ord where ord.CommodityId=commodity.CommodityId',function(err,result){
                    try {
                        //有可能发生异常的代码在此执行
                        console.log(JSON.stringify(result));
                        callbackDept(result);
                    }
                    catch(e)
                    {
                        //一旦发生异常时，处理后续工作,e表示发生异常的异常对象
                        console.log('发生异常了！具体信息：' + e.message);
                    }
                    finally{
                        //不论是否有异常，都会执行的代码
                        connection.end();
                    }
                });
            }
        });
    },
    selectOrder:function(dat,callbackDept){
        console.log(dat,'12312341234')
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('select * from orderInfo where UserId="'+dat['UserId']+'" and CommodityId="'+dat['CommodityId']+'" and OrderId is null',function(err,result){
                    try {
                        //有可能发生异常的代码在此执行
                        console.log(JSON.stringify(result));
                        callbackDept(result);
                    }
                    catch(e)
                    {
                        //一旦发生异常时，处理后续工作,e表示发生异常的异常对象
                        console.log('发生异常了！具体信息：' + e.message);
                    }
                    finally{
                        //不论是否有异常，都会执行的代码
                        connection.end();
                    }
                });
            }
        });
    },
    insertOrder:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            console.log(dat,'123');
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('insert into orderInfo (UserId,CommodityId,Number) values ("'+dat['UserId']+'","'+dat['CommodityId']+'","1")',function(err,result){
                    try {
                        //有可能发生异常的代码在此执行
                        console.log(JSON.stringify(result));
                        callbackDept(result);
                    }
                    catch(e)
                    {
                        //一旦发生异常时，处理后续工作,e表示发生异常的异常对象
                        console.log('发生异常了！具体信息：' + e.message);
                    }
                    finally{
                        //不论是否有异常，都会执行的代码
                        connection.end();
                    }
                });
            }
        });
    },
    deleteOrder:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('delete from orderInfo where UserId="'+dat['UserId']+'" and CommodityId="'+dat['CommodityId']+'"',function(err,result){
                    try {
                        //有可能发生异常的代码在此执行
                        console.log(JSON.stringify(result));
                        callbackDept(result);
                    }
                    catch(e)
                    {
                        //一旦发生异常时，处理后续工作,e表示发生异常的异常对象
                        console.log('发生异常了！具体信息：' + e.message);
                    }
                    finally{
                        //不论是否有异常，都会执行的代码
                        connection.end();
                    }
                });
            }
        });
    },
    setOrder:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('update orderInfo set Number="'+dat['Number']+'" where UserId="'+dat['UserId']+'" and CommodityId="'+dat['CommodityId']+'"',function(err,result){
                    try {
                        //有可能发生异常的代码在此执行
                        console.log(JSON.stringify(result));
                        callbackDept(result);
                    }
                    catch(e)
                    {
                        //一旦发生异常时，处理后续工作,e表示发生异常的异常对象
                        console.log('发生异常了！具体信息：' + e.message);
                    }
                    finally{
                        //不论是否有异常，都会执行的代码
                        connection.end();
                    }
                });
            }
        });
    },
    jiesuan1:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('update orderInfo set OrderId="'+dat['OrderId']+'" where UserId="'+dat['UserId']+'" and CommodityId="'+dat['CommodityId']+'"',function(err,result){
                    try {
                        //有可能发生异常的代码在此执行
                        console.log(JSON.stringify(result));
                        callbackDept(result);
                    }
                    catch(e)
                    {
                        //一旦发生异常时，处理后续工作,e表示发生异常的异常对象
                        console.log('发生异常了！具体信息：' + e.message);
                    }
                    finally{
                        //不论是否有异常，都会执行的代码
                        connection.end();
                    }
                });
            }
        });
    },
    jiesuan2:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        console.log(dat,'ffohghgo');
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('insert into flower.`order` (OrderId,OrderTime,OrderPrice,OrderType,UserId) values("'+dat['OrderId']+'","'+dat['OrderTime']+'","'+dat['OrderPrice']+'","否","'+dat['UserId']+'")',function(err,result){
                    try {
                        //有可能发生异常的代码在此执行
                        console.log(JSON.stringify(result));
                        callbackDept(result);
                    }
                    catch(e)
                    {
                        //一旦发生异常时，处理后续工作,e表示发生异常的异常对象
                        console.log('发生异常了！具体信息：' + e.message);
                    }
                    finally{
                        //不论是否有异常，都会执行的代码
                        connection.end();
                    }
                });
            }
        });
    },
    selectMoneyyes:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        console.log(dat,'ffohghgo');
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('select * from flower.`order` where UserId="'+dat+'" and OrderType="是"',function(err,result){
                    try {
                        //有可能发生异常的代码在此执行
                        console.log(JSON.stringify(result));
                        callbackDept(result);
                    }
                    catch(e)
                    {
                        //一旦发生异常时，处理后续工作,e表示发生异常的异常对象
                        console.log('发生异常了！具体信息：' + e.message);
                    }
                    finally{
                        //不论是否有异常，都会执行的代码
                        connection.end();
                    }
                });
            }
        });
    },
    selectMoneyno:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        console.log(dat,'ffohghgo');
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('select * from flower.`order` where UserId="'+dat+'" and OrderType="否"',function(err,result){
                    try {
                        //有可能发生异常的代码在此执行
                        console.log(JSON.stringify(result));
                        callbackDept(result);
                    }
                    catch(e)
                    {
                        //一旦发生异常时，处理后续工作,e表示发生异常的异常对象
                        console.log('发生异常了！具体信息：' + e.message);
                    }
                    finally{
                        //不论是否有异常，都会执行的代码
                        connection.end();
                    }
                });
            }
        });
    },
    selectMoneyAll:function(callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('select orderInfo.Number,orderInfo.OrderId,commodity.ImgPath,commodity.FlowerName,commodity.FlowerPrice ' +
                    'from orderInfo,commodity where ' +
                    'orderInfo.CommodityId=commodity.CommodityId',function(err,result){
                    try {
                        //有可能发生异常的代码在此执行
                        console.log(JSON.stringify(result));
                        callbackDept(result);
                    }
                    catch(e)
                    {
                        //一旦发生异常时，处理后续工作,e表示发生异常的异常对象
                        console.log('发生异常了！具体信息：' + e.message);
                    }
                    finally{
                        //不论是否有异常，都会执行的代码
                        connection.end();
                    }
                });
            }
        });
    },
    revoke1:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('delete from flower.`order` where UserId="'+dat['UserId']+'" and OrderId="'+dat['OrderId']+'"',function(err,result){
                    try {
                        //有可能发生异常的代码在此执行
                        console.log(JSON.stringify(result));
                        callbackDept(result);
                    }
                    catch(e)
                    {
                        //一旦发生异常时，处理后续工作,e表示发生异常的异常对象
                        console.log('发生异常了！具体信息：' + e.message);
                    }
                    finally{
                        //不论是否有异常，都会执行的代码
                        connection.end();
                    }
                });
            }
        });
    },
    revoke2:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('delete from orderInfo where UserId="'+dat['UserId']+'" and OrderId="'+dat['OrderId']+'"',function(err,result){
                    try {
                        //有可能发生异常的代码在此执行
                        console.log(JSON.stringify(result));
                        callbackDept(result);
                    }
                    catch(e)
                    {
                        //一旦发生异常时，处理后续工作,e表示发生异常的异常对象
                        console.log('发生异常了！具体信息：' + e.message);
                    }
                    finally{
                        //不论是否有异常，都会执行的代码
                        connection.end();
                    }
                });
            }
        });
    },
    payment:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('update flower.`order` set OrderType="是",OrderTime="'+dat['OrderTime']+'" where UserId="'+dat['UserId']+'" and OrderId="'+dat['OrderId']+'"',function(err,result){
                    try {
                        //有可能发生异常的代码在此执行
                        console.log(JSON.stringify(result));
                        callbackDept(result);
                    }
                    catch(e)
                    {
                        //一旦发生异常时，处理后续工作,e表示发生异常的异常对象
                        console.log('发生异常了！具体信息：' + e.message);
                    }
                    finally{
                        //不论是否有异常，都会执行的代码
                        connection.end();
                    }
                });
            }
        });
    },
    guanzhu:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('select * from commodity where CommodityId in (select CommodityId from assess where UserId="'+dat+'")',function(err,result){
                    try {
                        //有可能发生异常的代码在此执行
                        console.log(JSON.stringify(result));
                        callbackDept(result);
                    }
                    catch(e)
                    {
                        //一旦发生异常时，处理后续工作,e表示发生异常的异常对象
                        console.log('发生异常了！具体信息：' + e.message);
                    }
                    finally{
                        //不论是否有异常，都会执行的代码
                        connection.end();
                    }
                });
            }
        });
    }
};