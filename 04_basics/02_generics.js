var toy = /** @class */ (function () {
    function toy(content) {
        this.content = content;
        this.content = content;
    }
    return toy;
}());
//how to use this class
var toy1 = new toy("car");
console.log(toy1.content); // car
var toy2 = new toy(123);
console.log(toy2.content); // 123
//with methods
var box = /** @class */ (function () {
    function box(content) {
        this.content = content;
        this.content = content;
    }
    box.prototype.getcontect = function () {
        return this.content;
    };
    box.prototype.setcontent = function (value) {
        this.content = value;
    };
    return box;
}());
//multiple generics
// class keyvaluepair<k,v>{
//     constructor(key:k,v:value){
//         this.key=key;
//         this.value=value;
//     }
// }
// const pair=new keyvakuepair<string,number>("age",30);
