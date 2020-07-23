console.log('hello typescript');//ts compile to es5

var str: string = "hello ts";

let str1: string = "hello typescript";

//boolean
var flag: boolean = true;

flag = false;

//number

var a: number = 123;
console.log(a);
// a = "string"; //错误


// var arr = [1, "233", false];

// 第一种定义数组的方式
let arr: number[] = [1, 2, 34, 534];
console.log(arr);

//第二种定义方式
let arr1: Array<number> = [1, 2, 3, 4, 2];

//3
let arr2: any[] = [1, "de", true];

//元祖类型 tuple 属于数组的一种 
let arr3: [string, number, boolean] = ["ts", 2.42, true];

/*
enum 枚举名{
        标示符[=整型常数]，
        标示符[=整型常数]，
        标示符[=整型常数]
}
pay_status  0 未支付 1支付 2交易成功
*/
enum Flag {
    success = 1,
    error = -1
}
var f: Flag = Flag.success;

enum Color { red, blue = 5, orange };
var c: Color = Color.blue;
console.log(c);
console.log("red", Color.red);
console.log("orange", Color.orange);


//任意类型 
// var num: any = 123;
// num = "str";
// window.onload =function(){
//     var oBox:any = document.getElementById("box");

// oBox.style.color = "red";
// }

//null 和 undefined 其他 never类型 
// var num2:number;
// console.log(num2);//报错

// var num2:undefined;
// console.log(num2);


var num2: undefined | number;
console.log(num2);
num2 = 4;
console.log(num2);


var num3: null = null;
console.log(num3);


function run(): void {
    console.log("run");
}



//never 类型 是其他类型（ 包括 null 和 undefined ）的子类型，代表不会出现的值
//意味着变量只能被never类型所fu zhi 
var aa: undefined;
aa = undefined;

var bb: null = null;

// var cc: never;
// aa = (() => {
//     throw new Error('err');
// })();

//函数声明法

function run1(): string {
    return "h";
}

var fun2 = function (): string {
    return "jj";
}

function getInfo(name: string, age: number): string {
    return `${name} --- ${age}`;
}

var getInfo2 = function (name: string, age: number): string {
    return `${name} --- ${age}`;
};
//可选参数必须在末尾
function getInfo3(name: string, age?: number): string {
    if (age)
        return `${name} --- ${age}`;
    else
        return `${name} --- age unkown`;
}

function getInfo4(name: string, age: number = 30): string {

    return `${name} --- ${age}`;

}

function sum(a: number, ...nums: number[]): number {
    return a + nums.reduce((prev, cur) => { return prev + cur }, 0)
}
console.log(sum(1, 3, 3, 4, 5));


//函数重载 与java相似
//ts为了兼容es5 和 es6 重载写法与java不同
//es5中出现同名方法 下面会替换上面
function getInfo5(name: string): string;
function getInfo5(age: number): number;
function getInfo5(str: any): any {
    if (typeof str === "string") {
        return 'i am ' + str;
    } else {
        return 'my age is' + str;
    }
}

class Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
     }
    


}
var p = new Person("zhangsan");
console.log(p.getName);

class Web extends Person {
    constructor(name:string){
        super(name);
    }
    setName(name:string):void{
        this.name = name;
    }
    private age:number = 12;
    static print(){
        console.log('print');//静态方法
    }

}
//类里 三个修饰符 public private protected 默认public
var web = new Web('haha');
web.setName('aa');
console.log(web.getName());
// console.log(web.age);//不能拿到             


abstract class Human{
abstract run():void;
name:string;
constructor(name:string){
    this.name = name;
}
work(): void{
    console.log('work');
}
}
class Male extends Human{
    run(): void {
        console.log(this.name,' is running');
    }
    constructor(name:string){
        super(name);
    }
}

/*ts 自定义方法传入参数 对json进行约束
*/

function printLabel(labelInfo:{label:string}):void{
    console.log('printLabel');
}
// printLabel('hehe'); //错误
// printLabel({name:'zs'})//err
printLabel({label:'label'});

//对批量方法传入参数进行限制
//接口：行为和动作的规范，对批量方法进行约束

//就是传入对象的接口 属性接口
interface FullName{
    firstName:string;
    lastName:string;
}
function printName(name:FullName){
    //必须传入对象 firstName lastName

    console.log(name.firstName + "--" + name.lastName);
}

let name2 = {firstName:'hehe', lastName:'he',age:34};

printName(name2);
// printName({
//     firstName:'da',
//     lastName:'rd',
//     age:23
// })


/*
$.ajax({
    type:"GET",
    url:"test.json",
    data:{username:$("#username").val(),content:$("#content").val()},
    dataType:"json"
});
*/

interface Config{
    type:string;
    url:string;
    data?:string;
    dataType:string;
}

function ajax(config:Config){
    var xhr = new XMLHttpRequest();
    xhr.open(config.type,config.url,true);
    // xhr.setRequestHeader("Access-Control-Allow-Origin","*");
    xhr.send(config.data);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status ===200){
            console.log('success');
            if(config.dataType.toLowerCase() ==='json'){
                 console.log(JSON.parse(xhr.responseText));
            }
            console.log(xhr.responseText);
        }
    }

}
ajax({
    type:"get",
    url:"http://a.itying.com/api/productlist",
    dataType:"JSON",
    data:"name=zhangsan"
})

//函数类型接口 对方法传入参数 和 返回值进行约束

//加密的函数类型
interface encrypt{
    (key:string,value:string):string;
}

var md5:encrypt = function(key:string,value:string):string{
    return key+value;
}

console.log(md5('name','zhangsan'));



//ts 定义数组的方式 
interface UserArr{
    [index:number]:string;
}
var arr11:UserArr = ['aaa','vbb'];

interface UserObj{
    [index:string]:string;
}
var userObj:UserObj = {name:'zz',age:'12'};
//对类的约束 和抽象类相似

interface Animal{
    name:string;
    eat(str:string):void;
}

class Dog implements Animal{
    name: string;
    constructor(name:string){
        this.name = name;
    }
    eat(str: string): void {
        throw new Error("Method not implemented.");
    }

}

var d = new Dog('beibei');


function func1(val:any):any{
    return val;
}


// T表示泛型 具体什么类型是调用这个方法的时候决定的
function getData<T>(value:T):T{
    return value;
}
getData<number>(123);
getData<string>('hh2');


class MinClass<T>{
    public list: T[] = [];
    add(num:T):void{
        this.list.push(num);
    }
    min():T{
        var minNum = this.list[0];
        for(var i = 0; i < this.list.length; i++){
            if(minNum>this.list[i]){
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}