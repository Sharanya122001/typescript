//setter takes the value and transforms it before setting it to the property
//lets see the setter and the normal method difference

//with setter
class User {
  private _age: number = 0;

  set age(value: number) {
    this._age = value;
  }
}

let u = new User();
u.age = 25;   // looks like property assignment

//Notice:
    // No parentheses
    // Looks like normal property update
    // Only ONE parameter allowed
//Setter rule : Must have exactly one parameter
//set age(a: number, b: number) { } // ❌ Error

//Setter:
// Cannot return a value
// set age(value: number) {
//   this._age = value;
//   return value; // ❌ Not allowed
// }



//normal method
class User1 {
  private _age: number = 0;

  updateAgee(value: number) {
    this._age = value;
  }
}

let u1 = new User1();
u1.updateAgee(25);   // looks like function call
//Notice:
    // Has parentheses
    // Can take multiple parameters
    // // Looks like action
//Normal method : Can have 0, 1, or many parameters



// 🎯 2️⃣ How They Feel Conceptually
// Setter	                                  Normal Method
// Feels like setting a property	          Feels like performing an action
// user.age = 25	                          user.updateAge(25)
// Clean & natural	                          Explicit action





///mainly this getter and setter are used when we want to control the access to a particular property 
// and we want to perform some action before setting or getting the value of that property.





















































export {};