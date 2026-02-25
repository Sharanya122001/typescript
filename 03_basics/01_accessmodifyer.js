"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user1 = new User("John", 30);
console.log(user1.name); // John
// console.log(user1.age); // Error: Property 'age' is private and only accessible within class 'User'.
//Public can be accessed:
// Inside class
// Outside class
// Private means:
// Accessible only inside the class.
//why use the private access modifier?
// 1. Encapsulation: It helps to hide the internal details of a class and only expose what is necessary. This makes the code easier to maintain and understand.
// 2. Data Protection: It prevents external code from accidentally modifying the internal state of an object, which can lead to bugs and unexpected behavior.
// 3. Control: It allows the class to control how its data is accessed and modified, ensuring that it remains in a valid state.
// example:
var bank = /** @class */ (function () {
    function bank(balance) {
        this.balance = balance;
    }
    bank.prototype.getbalance = function () {
        return this.balance;
    };
    return bank;
}());
console.log(new bank(1000).getbalance()); // 1000
