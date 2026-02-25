//protected means:

// Accessible inside the class
// AND inside child classes
// BUT NOT outside the class

class parent{
    protected money:number=1000;
}
class child extends parent{
    show(){
        console.log(this.money);//1000
    }
}
let c=new child();
c.show(); // 1000
// console.log(c.money); // Error: Property 'money' is protected and only accessible within class 'parent' and its subclasses.







































export{};