interface user{
    readonly dbId:number, // this is a read-only property, it can only be set when the object is created and cannot be changed afterwards.
    email:string,
    userId:number,
    googleId?:string // this is optional property, it may or may not be present in the object of type user.
    startTrail:()=>string // this is a method that returns a string, it can be implemented in the object of type user.
    //startTrail():string // this is another way to define the method, it is equivalent to the above definition.
    getcoupon(couponname:string):number // this is a method that takes a string argument and returns a number, it can be implemented in the object of type user.
}

const sharanya:user={dbId: 22, email:"sharanya@gmail.com", userId:12345,startTrail:()=>{
    return "trail started";
},getcoupon:(couponname:"sharanayaaa")=>{
    return 10;
}}
sharanya.email="sharanya2@gmail.com"; // this is fine because email is not readonly


interface User {
  name: string;
  age?: number;//You can make properties optional using ?
}

interface User {
  readonly id: number;//readonly You cannot change id after creation.
  name: string;
}



export{}