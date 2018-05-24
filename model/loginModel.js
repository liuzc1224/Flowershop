/**
 * Created by Administrator on 2017/4/7.
 */
var mysql = require('mysql');
var DBSet = require('./DBSet');
module.exports ={
    selectUser:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('select * from user where UserName="'+dat['userName']+'" and Password="'+dat['Password']+'"',function(err,result){
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
    selectassess:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            console.log('dat',dat);
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('select * from assess where UserId="'+dat['UserId']+'" and CommodityId="'+dat['CommodityId']+'"',function(err,result){
                    try {
                        //有可能发生异常的代码在此执行
                        console.log(JSON.stringify(result),'123');
                        //console.log(err,'123');
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
    insertassessr:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                console.log('dat',dat);
                connection.query('insert into assess (UserId,CommodityId) values("'+dat['UserId']+'","'+dat['CommodityId']+'")',function(err,result){
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
}