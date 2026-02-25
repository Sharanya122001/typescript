"use strict";
//setter takes the value and transforms it before setting it to the property
//lets see the setter and the normal method difference
Object.defineProperty(exports, "__esModule", { value: true });
//with setter
var User = /** @class */ (function () {
    function User() {
        this._age = 0;
    }
    Object.defineProperty(User.prototype, "age", {
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var u = new User();
u.age = 25; // looks like property assignment
//Notice:
// No parentheses
// Looks like normal property update
// Only ONE parameter allowed
//Setter rule : Must have exactly one parameter
//set age(a: number, b: number) { } // ❌ Error
//Setter:
// Cannot return a value
// set age(value: number) {
//   this._age = value;
//   return value; // ❌ Not allowed
// }
//normal method
var User1 = /** @class */ (function () {
    function User1() {
        this._age = 0;
    }
    User1.prototype.updateAgee = function (value) {
        this._age = value;
    };
    return User1;
}());
var u1 = new User1();
u1.updateAgee(25); // looks like function call
