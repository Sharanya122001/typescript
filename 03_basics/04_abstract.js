"use strict";
//Abstract class:
// ✅ You cannot create an object of an abstract class directly.
// ✅ You can use it through a child class that extends it.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
//let a=new Animal(); // Error: Cannot create an instance of an abstract class.
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof!"); // Implementation of the abstract method
    };
    return Dog;
}(Animal));
var d = new Dog();
d.makeSound(); // Woof!
//❌ Abstract method cannot have a body
// ✅ It must be empty (no implementation)
//🧩 Correct Syntax
// abstract class Animal {
//   abstract makeSound(): void;
// }
// Notice:
// No { }
// No code inside
// Only method signature
//when we are taking the properties of the abstract class in the child class then we have to implement all the properties of the abstract class in the child class otherwise it will give an error.
//with the help of super keyword we can access the properties of the parent class in the child class and we can also use the constructor of the parent class in the child class by using super keyword.
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1.prototype.move = function () {
        console.log("Animal is moving");
    };
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog1.prototype.makeSound = function () {
        console.log("Woof!"); // Implementation of the abstract method
    };
    return Dog1;
}(Animal1));
var d1 = new Dog1();
d1.makeSound(); // Woof!
d1.move(); // Animal is moving
//note that the abstract class can also have normal methods with implementation and the child class can use those methods without any issue. The child class only needs to implement the abstract methods that are declared in the abstract class.
//and it is also possible that An abstract class does NOT need to have abstract methods.
var Vehicle = /** @class */ (function () {
    function Vehicle(brand) {
        this.brand = brand;
    }
    Vehicle.prototype.start = function () {
        console.log("".concat(this.brand, " is starting."));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand) {
        return _super.call(this, brand) || this;
    }
    return Car;
}(Vehicle));
var myCar = new Car("Toyota");
myCar.start(); // Toyota is starting.
