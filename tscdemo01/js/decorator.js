"use strict";
//类装饰器
// function logClass(params:any){
// console.log(params);
// params.prototype.apiUrl = "xxx";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// }
// @logClass
// class HttpClient{
//     constructor(){
//     }
//     getData(){
//     }
// }
// var client: any = new HttpClient();
// console.log(client.apiUrl);
// function logClass(params: any) {
//     return function (target: any) {
//         console.log(target);
//         console.log(params);
//     }
// }
// @logClass("hello")
// class HttpClient{
//     constructor(){
//     }
//     getData(){
//     }
// }
// var client = new HttpClient();
//类装饰器
// function logClass(target: any) {
//     console.log(target);
//     return class extends target {
//         apiUrl: any = 'updated apiurl';
//         getData() {
//             this.apiUrl = this.apiUrl = "----";
//             console.log(this.apiUrl);
//         }
//     }
// }
// function logClass(params:string){
//     return function(target:any){
//         console.log("logclass",target);
//         console.log("logclass",params);
//     }
// }
// function logPropery(params: any) {
//     return function(target:any,attr:any){
//         console.log("logpro",target);
//         console.log("logpro",attr);
//     }
// }
// @logClass('xxx')
// class HttpClient {
//     @logPropery('haha')
//     public url: any | undefined;
//     constructor() {
//     }
//     getData() {
//     }
// }
// var client = new HttpClient();
//方法修饰
// function get(params: any) {
//     return function(target: any, methodName: any, des: any){
//         console.log("t",target);
//         console.log("m",methodName);
//         console.log("d",des);   
//         var oMethod = des.value;
//         des.value = function(...args:any[]){
//             args = args.map(value => {
//                 return String(value);
//             })
//             console.log(args);
//             oMethod.apply(this,args);
//         }
//     }
// }
// class HttpClient{
//     public url: any | undefined;
//     constructor(){
//     }
//     @get('http://www.google.com')
//     getData(){
//         console.log("i am getData");
//     }
// }
// var client = new HttpClient();
// client.getData('acad',123,true);
//方法参数装饰器
//参数装饰器会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一下元素数据，传入下列3个参数
//1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
//2.参数的名字
//3。参数在函数参数列表中的索引
// function logParams(params:any){
//     return function(target:any,methodName:any,paramsIndex:any){
//         console.log(params);
//         console.log(target);
//         console.log(methodName);
//         console.log(paramsIndex); 
//         target.apiUrl = params;      
//     }
// }
// class HttpClient{
//     public url: any | undefined;
//     constructor(){
//     }
//     getData(@logParams('xxxx') uuid:any){
//         console.log("i am getData");
//     }
// }
// var client = new HttpClient();
// client.getData('aa');
// console.log(client.apiUrl);
function logClass1(params) {
    return function (target) {
        console.log('class1');
    };
}
function logClass2(params) {
    return function (target) {
        console.log('class2');
    };
}
function logAttribute(params) {
    return function (target, attrName) {
        console.log('attr');
    };
}
function logMethod(params) {
    return function (target, attrName, des) {
        console.log('method');
    };
}
function logParams1(params) {
    return function (target, attrName, des) {
        console.log("params1");
    };
}
function logParams2(params) {
    return function (target, attrName, des) {
        console.log("params2");
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
        console.log("i am getData");
    };
    HttpClient.prototype.setData = function (attr1, attr2) {
    };
    __decorate([
        logAttribute()
    ], HttpClient.prototype, "url", void 0);
    __decorate([
        logMethod()
    ], HttpClient.prototype, "getData", null);
    __decorate([
        __param(0, logParams1()), __param(1, logParams2())
    ], HttpClient.prototype, "setData", null);
    HttpClient = __decorate([
        logClass1('111'),
        logClass2('222')
    ], HttpClient);
    return HttpClient;
}());
var client = new HttpClient();
