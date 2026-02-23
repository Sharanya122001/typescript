let greeting: string = "Hello, World!";
//now if i try to assign a number to greeting, it will give an error because greeting is of type string.
// greeting = 42; // Error: Type 'number' is not assignable to type 'string'.
greeting.toLowerCase(); // This is fine because toLowerCase is a method of string.
console.log(greeting); // Hello, World!

//now we have learnt about variables and types in TypeScript.
// We can declare variables with specific types, and TypeScript will help us catch errors if we try to assign values of the wrong type. 
// This makes our code safer and easier to maintain.



//number
let num: number = 308034760.6;
//let num= 308034760.6; even this works because TypeScript can infer the type from the assigned value.
//let num="sharma"; // Error: Type 'string' is not assignable to type 'number'.

//boolean
let isActive: boolean = true;
//let isActive= true; // TypeScript can infer the type.
//let isActive= "true"; // Error: Type 'string' is not assignable to type 'boolean'.

//any
//any is bascially where we can off the type checking for a variable, it can hold any type of value.
let anything;
function gethero(){
    return "hero";
}
anything = gethero(); // anything can hold the return value of gethero, which is a string.
//when we hover on this above line we can see that anything is of type any, which means it can hold any type of value.
//let anything:string; // if we declare anything as string, then it can only hold string values.
// function gethero(){
//     return "hero";
// }
// anything = gethero(); 


//typescript alo has a special type, any, that you can use whenever you dont want a particular value to cause typechecking errors.


//noImplicitAny
//if this is true in config then:
//❌ Don’t allow variables or parameters to automatically become any.
//🔥 Why This Is Important
//If you allow any, you lose TypeScript benefits.

//noImplicitAny means:
// “Don’t allow TypeScript to automatically guess any.
// Force me to write proper types.”