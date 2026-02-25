//Generics
//suppose this is the function taking the input for only number 
function identity(value) {
    return value;
}
//but we want this function to work with other types like string,boolean etc
// function identity(value: string): string {
//   return value;
// }
// function identity(value: boolean): boolean {
//   return value;
// }
// we can't do this because we have to write the same function for different types and it will be a lot of code and it will be hard to maintain.
// so we can use generics to solve this problem
function identity1(value) {
    return value;
}
//What is <T>?
// It is a placeholder for type.
// Think of it as:
// T = Type
// now we can use this function with any type
console.log(identity1(123)); // 123
console.log(identity1("Hello")); // Hello
console.log(identity1(true)); // true
var Box = /** @class */ (function () {
    function Box(value) {
        this.content = value;
    }
    return Box;
}());
var box1 = new Box(123);
console.log(box1.content); // 123
//how this is different from any
// function identity(value: any): any {
//   return value;
// }
// Problem:
// TypeScript loses type safety ❌
// let result2 = identity("Hello");
// result2.toUpperCase(); // No error at compile time, but crash at runtime
// let result3 = identity(10);
// result3.toUpperCase(); // ❌ Error (correctly detected)
// any = No type checking
// <T> = Flexible but safe type
