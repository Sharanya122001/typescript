function addtwo(num:number){
    return num+2;
}

function getUpper(val:string){
    return val.toUpperCase();
}

addtwo(8); // This is fine, it will return 10.
// addtwo("8"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
getUpper("hello"); // This is fine, it will return "HELLO".
// getUpper(8); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

function signUpUser(name:string, email:string, isPaid:boolean){
    //code to sign up user
}
//signUpUser(2, "sharma@example.com", false);// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
signUpUser("sharma", "sharma@example.com", false);

let loginUser = (name:string, email:string, isPaid:boolean=false) => {//here there will be some type check in the .js file 
    //code to login user
}
loginUser("sharma", "sharma@example.com");


// function getvalue(myval:number):string{
//     if(myval>5){
//         return true;
//     }
//     return "200 ok";
// }
//this type of the things can also happen

const heros=["thor", "spiderman", "ironman"];
heros.map((hero)=>{
    return `hero is ${hero}`;
})
//as the array is of type string[], the hero parameter in the map function is inferred to be of type string, 
//so we can use string methods on it without any errors.

// 1️⃣ Function That Never Finishes
function throwError(): never {
  throw new Error("Something went wrong");
}
//Why never?
// Because:
  // This function never returns
  // It always throws an error
  // It stops execution

  function infiniteLoop(): never {
  while (true) {
    console.log("Running...");
  }
}
// This runs forever.
// It never returns anything.
// So return type is never.

// 2️⃣ TypeScript Knows Something Can Never Happen
function check(value: string | number) {
  if (typeof value === "string") {
    console.log("It is string");
  } else if (typeof value === "number") {
    console.log("It is number");
  } else {
    value; // type here is NEVER
  }
}
// Why?
// Because:
// value can only be string or number
// We already handled both cases
// So the else block is impossible

// TypeScript says:
// 👉 That case will never happen → type = never

// 3️⃣ Variables That Can Never Have Value
let x: never;
// This means:
// x can never store anything.
// You cannot assign even null, undefined, number, string — nothing.
// It is basically unusable directly.
export{}