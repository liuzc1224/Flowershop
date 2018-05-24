/**
 * Created by liu on 2017/4/15.
 */
var mysql = require('mysql');
var DBSet = require('./DBSet');
module.exports ={
    selectUser:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('select * from user where UserName="'+dat['userName']+ '"',function(err,result){
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
    insertUser:function(dat,callbackDept){
        var connection = mysql.createConnection(DBSet.connectionString);
        connection.connect(function(err){
            if(err) console.log('连接失败，具体信息：' + err.message);
            else{
                connection.query('insert into user (UserName,Password) values("'+dat['userName']+'","'+dat['Password']+'")',function(err,result){
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