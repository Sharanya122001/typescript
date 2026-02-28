class toy<T>{
    constructor(public content:T){
        this.content=content;
    }
}

//how to use this class
let toy1=new toy<string>("car");
console.log(toy1.content); // car

let toy2=new toy<number>(123);
console.log(toy2.content); // 123

//with methods
class box<T>{
    constructor(public content:T){
        this.content=content;
    }
    getcontect():T{
        return this.content;
    }
    setcontent(value:T):void{
        this.content=value;
    }
}
//multiple generics
// class keyvaluepair<k,v>{
//     constructor(key:k,v:value){
//         this.key=key;
//         this.value=value;
//     }
// }
// const pair=new keyvakuepair<string,number>("age",30);