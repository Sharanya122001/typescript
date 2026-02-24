"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newuser = {
    name: "John",
    id: 1
};
// let newuser:user={ for this if its newuser={username:"admin", id:2} then error
//     name:"John",
//     id:1
// }
newuser = { username: "admin", id: 2 }; // this is fine because newuser can be of type user or admin.
// newuser={name:"John", username:"admin", id:3} // Error: Type '{ name: string; username: string; id: number; }' is not assignable to type 'user | admin'.
//   Object literal may only specify known properties, and 'name' does not exist in type 'admin'.
// newuser={name:"John", id:1} // this is fine because newuser can be of type user or admin.
// function getid(id:number|string){
//     id.toLowerCase(); // Error: Property 'toLowerCase' does not exist on type 'string | number'.
// }
function getid(id) {
    if (typeof id === "string") {
        id.toLowerCase(); // This is fine because we are checking the type of id before using string methods on it.
    }
    else {
        id.toFixed(2); // This is fine because we are checking the type of id before using number methods on it.
    }
}
//in arrays the union type can also be used, for example:
var data = [1, 2, 3, 4, 5];
var alpa = ["a", "b", "c", "d"];
var mix = [1, "a", 2, "b", 3, "c"]; // this is fine because mix can be of type string[] or number[].
//if it is const mix:string[]|number[]=[1,"a",2,"b",3,"c"]; then it will show error because it should be either string or array not bth in one 
// if both in one is needed then (string|number)[] should be used.
//some very strick examples like:
var pi = 3.142; // this is fine because pi is of type 3.142, which means it can only hold the value 3.142.
