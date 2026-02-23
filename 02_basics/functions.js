function addtwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
addtwo(8); // This is fine, it will return 10.
// addtwo("8"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
getUpper("hello"); // This is fine, it will return "HELLO".
// getUpper(8); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
function signUpUser(name, email, isPaid) {
    //code to sign up user
}
//signUpUser(2, "sharma@example.com", false);// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
signUpUser("sharma", "sharma@example.com", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    //code to login user
};
loginUser("sharma", "sharma@example.com");
