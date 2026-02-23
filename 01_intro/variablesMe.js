var greeting = "Hello, World!";
//now if i try to assign a number to greeting, it will give an error because greeting is of type string.
// greeting = 42; // Error: Type 'number' is not assignable to type 'string'.
greeting.toLowerCase(); // This is fine because toLowerCase is a method of string.
console.log(greeting); // Hello, World!
//now we have learnt about variables and types in TypeScript.
// We can declare variables with specific types, and TypeScript will help us catch errors if we try to assign values of the wrong type. 
// This makes our code safer and easier to maintain.
//number
var num = 308034760.6;
//let num= 308034760.6; even this works because TypeScript can infer the type from the assigned value.
//let num="sharma"; // Error: Type 'string' is not assignable to type 'number'.
//boolean
var isActive = true;
//let isActive= true; // TypeScript can infer the type.
//let isActive= "true"; // Error: Type 'string' is not assignable to type 'boolean'.
