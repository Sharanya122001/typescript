//getter and simple method difference
//without the getter
var bank = /** @class */ (function () {
    function bank(balance) {
        this.balance = balance;
    }
    bank.prototype.getbalance = function () {
        return this.balance;
    };
    return bank;
}());
var bank1 = new bank(1000);
console.log(bank1.getbalance()); // 1000///see this line
//with the getter
var User = /** @class */ (function () {
    function User(name) {
        this._name = name;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var u = new User("Sharanya");
console.log(u.name); // works ///see this line
//in the examples above the normal method has the syntax of calling:
//                                                   bank1.getbalance()
// while the getter has the syntax of accessing a property:
//                                                   u.name
//Getter looks like a normal property, not a function.
// Cleaner and more natural.
//as the getter is accessed as a property, so it is not possible to pass any input throught it
//There are no parentheses.
// No arguments.
// No parameters.
