"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "John",
    age: 30,
    isAdmin: true
};
function createUser(user) {
    console.log(user.name);
}
function createfunction() {
    return {
        name: "John",
        age: 30,
        isAdmin: true
    };
}
function createUser2(user) {
    return user;
}
var myuser = {
    _id: "12345",
    name: "John",
    age: 30
};
myuser.name = "Doe"; // this is fine because name is not readonly
