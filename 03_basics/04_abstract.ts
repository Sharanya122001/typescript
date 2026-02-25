//Abstract class:
// ✅ You cannot create an object of an abstract class directly.
// ✅ You can use it through a child class that extends it.

abstract class Animal{
    abstract makeSound():void; // Abstract method, no implementation here
}
//let a=new Animal(); // Error: Cannot create an instance of an abstract class.

class Dog extends Animal{
    makeSound(){
        console.log("Woof!"); // Implementation of the abstract method
    }
}
let d=new Dog();
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

abstract class Animal1{
    abstract makeSound():void;
    move():void{
        console.log("Animal is moving");
    }
}

class Dog1 extends Animal1{
    makeSound(){
        console.log("Woof!"); // Implementation of the abstract method
    }
}

let d1=new Dog1();
d1.makeSound(); // Woof!
d1.move(); // Animal is moving
//note that the abstract class can also have normal methods with implementation and the child class can use those methods without any issue. The child class only needs to implement the abstract methods that are declared in the abstract class.
//and it is also possible that An abstract class does NOT need to have abstract methods.

abstract class Vehicle {
    constructor(public brand: string) {}
    start() {
        console.log(`${this.brand} is starting.`);
    }
}

class Car extends Vehicle {
    constructor(brand: string) {
        super(brand);
    }
}
let myCar = new Car("Toyota");
myCar.start(); // Toyota is starting.



















export{};