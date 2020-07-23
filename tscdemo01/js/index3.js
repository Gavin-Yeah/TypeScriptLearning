"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
var db_1 = require("./modules/db");
db_1.getData();
console.log(db_1.dbUrl);
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + " is eating");
        };
        return Dog;
    }());
    A.Dog = Dog;
})(A = exports.A || (exports.A = {}));
var d = new A.Dog('ww');
