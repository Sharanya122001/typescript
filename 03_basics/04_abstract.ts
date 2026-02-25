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






















export{};