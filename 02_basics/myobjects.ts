const user={
    name:"John",
    age:30,
    isAdmin:true
}

function createUser(user:{name:string, age:number, isAdmin:boolean}){
    console.log(user.name);
}

function createfunction():{name:string, age:number, isAdmin:boolean}{//object returning the object
    return {
        name:"John",
        age:30,
        isAdmin:true
    }
}


//type aliases

type User = {
     name:string,
     age:number,
     isAdmin:boolean
}

function createUser2(user:User):User{
    return user;
}

type user1={
    readonly _id:string,
    name:string,
    age:number,
    isAdmin?:boolean
}

let myuser:user1={
    _id:"12345",
    name:"John",
    age:30
}
myuser.name="Doe"; // this is fine because name is not readonly
//myuser._id="54321"; // Error: Cannot assign to '_id' because it is a read-only property.

//if we want to combine to or more types we can use intersection types
type cardNumber={
    cardnumber:string
}
type cardDate={
    carddate:string
}
type cardDetails=cardNumber & cardDate&{
    cvv:string
}

export{}