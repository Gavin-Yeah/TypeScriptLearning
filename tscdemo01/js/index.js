"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('hello typescript'); //ts compile to es5
var str = "hello ts";
var str1 = "hello typescript";
//boolean
var flag = true;
flag = false;
//number
var a = 123;
console.log(a);
// a = "string"; //错误
// var arr = [1, "233", false];
// 第一种定义数组的方式
var arr = [1, 2, 34, 534];
console.log(arr);
//第二种定义方式
var arr1 = [1, 2, 3, 4, 2];
//3
var arr2 = [1, "de", true];
//元祖类型 tuple 属于数组的一种 
var arr3 = ["ts", 2.42, true];
/*
enum 枚举名{
        标示符[=整型常数]，
        标示符[=整型常数]，
        标示符[=整型常数]
}
pay_status  0 未支付 1支付 2交易成功
*/
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 5] = "blue";
    Color[Color["orange"] = 6] = "orange";
})(Color || (Color = {}));
;
var c = Color.blue;
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
var num2;
console.log(num2);
num2 = 4;
console.log(num2);
var num3 = null;
console.log(num3);
function run() {
    console.log("run");
}
//never 类型 是其他类型（ 包括 null 和 undefined ）的子类型，代表不会出现的值
//意味着变量只能被never类型所fu zhi 
var aa;
aa = undefined;
var bb = null;
// var cc: never;
// aa = (() => {
//     throw new Error('err');
// })();
//函数声明法
function run1() {
    return "h";
}
var fun2 = function () {
    return "jj";
};
function getInfo(name, age) {
    return name + " --- " + age;
}
var getInfo2 = function (name, age) {
    return name + " --- " + age;
};
//可选参数必须在末尾
function getInfo3(name, age) {
    if (age)
        return name + " --- " + age;
    else
        return name + " --- age unkown";
}
function getInfo4(name, age) {
    if (age === void 0) { age = 30; }
    return name + " --- " + age;
}
function sum(a) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    return a + nums.reduce(function (prev, cur) { return prev + cur; }, 0);
}
console.log(sum(1, 3, 3, 4, 5));
function getInfo5(str) {
    if (typeof str === "string") {
        return 'i am ' + str;
    }
    else {
        return 'my age is' + str;
    }
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person("zhangsan");
console.log(p.getName);
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        var _this = _super.call(this, name) || this;
        _this.age = 12;
        return _this;
    }
    Web.prototype.setName = function (name) {
        this.name = name;
    };
    Web.print = function () {
        console.log('print'); //静态方法
    };
    return Web;
}(Person));
//类里 三个修饰符 public private protected 默认public
var web = new Web('haha');
web.setName('aa');
console.log(web.getName());
// console.log(web.age);//不能拿到             
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.work = function () {
        console.log('work');
    };
    return Human;
}());
var Male = /** @class */ (function (_super) {
    __extends(Male, _super);
    function Male(name) {
        return _super.call(this, name) || this;
    }
    Male.prototype.run = function () {
        console.log(this.name, ' is running');
    };
    return Male;
}(Human));
/*ts 自定义方法传入参数 对json进行约束
*/
function printLabel(labelInfo) {
    console.log('printLabel');
}
// printLabel('hehe'); //错误
// printLabel({name:'zs'})//err
printLabel({ label: 'label' });
function printName(name) {
    //必须传入对象 firstName lastName
    console.log(name.firstName + "--" + name.lastName);
}
var name2 = { firstName: 'hehe', lastName: 'he', age: 34 };
printName(name2);
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    // xhr.setRequestHeader("Access-Control-Allow-Origin","*");
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('success');
            if (config.dataType.toLowerCase() === 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            console.log(xhr.responseText);
        }
    };
}
ajax({
    type: "get",
    url: "http://a.itying.com/api/productlist",
    dataType: "JSON",
    data: "name=zhangsan"
});
var md5 = function (key, value) {
    return key + value;
};
console.log(md5('name', 'zhangsan'));
var arr11 = ['aaa', 'vbb'];
var userObj = { name: 'zz', age: '12' };
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function (str) {
        throw new Error("Method not implemented.");
    };
    return Dog;
}());
var d = new Dog('beibei');
function func1(val) {
    return val;
}
// T表示泛型 具体什么类型是调用这个方法的时候决定的
function getData(value) {
    return value;
}
getData(123);
getData('hh2');
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
