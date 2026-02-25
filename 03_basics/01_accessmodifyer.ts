class User{
    public name: string;
    private age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

let user1=new User   ("John",30);
console.log(user1.name); // John
// console.log(user1.age); // Error: Property 'age' is private and only accessible within class 'User'.

//Public can be accessed:
// Inside class
// Outside class

// Private means:
// Accessible only inside the class.

//why use the private access modifier?
// 1. Encapsulation: It helps to hide the internal details of a class and only expose what is necessary. This makes the code easier to maintain and understand.
// 2. Data Protection: It prevents external code from accidentally modifying the internal state of an object, which can lead to bugs and unexpected behavior.
// 3. Control: It allows the class to control how its data is accessed and modified, ensuring that it remains in a valid state.

// example:
class bank{
    private balance:number;
    constructor(balance:number){
        this .balance=balance;
    }
    getbalance():number{
        return this.balance;    
    }
}
console.log(new bank(1000).getbalance()); // 1000
//console.log(bank.balance); // Error: Property 'balance' is private and only accessible within class 'bank'. 
//we can see that throught the method we can get the value of that particular private element but directly we cannot access that field. 
// This is the main purpose of using private access modifier. It provides a way to control access to the internal state of an object and ensures that it can only be accessed through defined methods, which can enforce certain rules or constraints on how the data is used.

//in ts both are same 
//                public name :string;
//                name :string;


// class bank{
//     private balance:number;
//     constructor(balance:number){
//     }
// }












export{}