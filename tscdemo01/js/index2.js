"use strict";
// interface ConfigFn {
//     (val1: string, val2: string): string;
// }
function getData2(val) {
    return val;
}
var getMyData = getData2;
getMyData(12);
//定义mysql数据库的类
var MsSqlDb = /** @class */ (function () {
    function MsSqlDb() {
    }
    MsSqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MsSqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.get = function (id) {
        var list = [{
                title: 'xx',
                desc: 'sdc'
            }];
        return list;
    };
    return MsSqlDb;
}());
//操作用户表 定义一个User类 和 数据表做映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var user = new User();
user.username = 'zs';
user.password = '123455';
var Mysql = new MsSqlDb();
Mysql.add(user);
var data = Mysql.get(23);
