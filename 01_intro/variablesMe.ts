let greeting: string = "Hello, World!";
//now if i try to assign a number to greeting, it will give an error because greeting is of type string.
// greeting = 42; // Error: Type 'number' is not assignable to type 'string'.
greeting.toLowerCase(); // This is fine because toLowerCase is a method of string.
console.log(greeting); // Hello, World!

//now we have learnt about variables and types in TypeScript.
// We can declare variables with specific types, and TypeScript will help us catch errors if we try to assign values of the wrong type. 
// This makes our code safer and easier to maintain.