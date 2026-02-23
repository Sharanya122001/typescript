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
export{}