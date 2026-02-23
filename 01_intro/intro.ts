let user={
    name:"John",
    age:30,
    isAdmin:true
}
console.log(user.name); // John


//ts is a wrapper around the javascript language, it adds some features and checks to make it easier to write and maintain code.
// When you run:
// tsc intro.ts

// 👉 TypeScript compiles your .ts file into a JavaScript (.js) file.
// Because:
// 🔥 Browsers and Node.js understand only JavaScript, NOT TypeScript.
// So TypeScript converts your code into JavaScript.
//TypeScript is like:
// 🛠 A developer tool that produces JavaScript.


//intro.ts   →   tsc   →   intro.js   →   node intro.js

//If you don’t want to manually compile every time, you can use:
// tsc --watch
// Now TypeScript automatically compiles whenever you save the file.
