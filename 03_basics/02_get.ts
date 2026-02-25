//getter and simple method difference
//without the getter
class bank{
    private balance:number;
    constructor(balance:number){
        this .balance=balance;
    }
    getbalance():number{
        return this.balance;    
    }
}
let bank1=new bank(1000);
console.log(bank1.getbalance()); // 1000///see this line


//with the getter
class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let u = new User("Sharanya");

console.log(u.name); // works ///see this line


//in the examples above the normal method has the syntax of calling:
//                                                   bank1.getbalance()

// while the getter has the syntax of accessing a property:
//                                                   u.name
//Getter looks like a normal property, not a function.
// Cleaner and more natural.

//as the getter is accessed as a property, so it is not possible to pass any input throught it
//There are no parentheses.
// No arguments.
// No parameters.