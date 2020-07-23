// interface ConfigFn {
//     (val1: string, val2: string): string;
// }

// var setData: ConfigFn = function (val1: string, val2: string): string {
//     return val1 + val2;
// }


//泛型接口

// interface ConfigFn{
//     <T>(val:T):T;
// }

// var getData2:ConfigFn = function<T>(val:T):T{
//     return val;
// }
// getData(12);

interface ConfigFn<T> {
    <T>(val: T): T;
}

function getData2<T>(val: T): T {
    return val;
}
var getMyData: ConfigFn<string> = getData2;
getMyData(12);


/**
 * 定义一个user类 来映射数据库字段
 * 定义一个 MysqlDb 类来操作数据库
 * 然后把User类作为参数传入MysqlDb中
 * var user = new User({
 * username:'zhangsan',
 * password:'123456});
 * var Db = new MysqlDb();
 * Db.add(user);
 */
// class User {
//     username: string | undefined;
//     password: string | undefined;
//     status: number | undefined;
//     constructor(params: { username: string | undefined, password: string | undefined, status?: number | undefined }) {
//         this.username = params.username;
//         this.password = params.password;
//         this.status = params.status;
//     }

// }
// class MysqlDb<T>{
//     add(user: T): boolean {

//         console.log(user);
//         return true;
//     }
// }

// var user = new User({
//     username:'zhangsan', 
//     password: '123456'
// });


// var db = new MysqlDb();
// db.add(user);

interface DBI<T>{
    add(info: T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}

//定义mysql数据库的类


class MsSqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        console.log(info);
        return true;
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        var list = [{
            title:'xx',
            desc:'sdc'
        }];
        return list;

    }

}

//操作用户表 定义一个User类 和 数据表做映射

class User{
    username:string|undefined;
    password:string|undefined;
}
var user = new User();
user.username = 'zs';
user.password = '123455';

var Mysql = new MsSqlDb<User>();
Mysql.add(user);
var data =  Mysql.get(23);
