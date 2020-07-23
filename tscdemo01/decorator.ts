//类装饰器
// function logClass(params:any){
// console.log(params);
// params.prototype.apiUrl = "xxx";

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


function logClass1(params:string){
    return function(target:any){
        console.log('class1');
        
    }
}
function logClass2(params:string){
    return function(target:any){
        console.log('class2');
        
    }
}

function logAttribute(params?:string){
    return function(target:any,attrName:any){
        console.log('attr');
        
    }
}

function logMethod(params?:string){
    return function(target:any,attrName:any,des:any){
        console.log('method');
        
    }
}

function logParams1(params?:string){
    return function(target:any,attrName:any,des:any){
        console.log("params1");
        
    }
}
function logParams2(params?:string){
    return function(target:any,attrName:any,des:any){
        console.log("params2");
        
    }
}

@logClass1('111')
@logClass2('222')
class HttpClient{

    @logAttribute()
    public url: any | undefined;
    constructor(){

    }
    @logMethod()
    getData(){
        console.log("i am getData");
        
    }
    setData(@logParams1() attr1:any, @logParams2() attr2:any ){


    }
}
var client = new HttpClient();
