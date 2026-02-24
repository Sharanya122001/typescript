🎯 First — What is push()?
push() is a method used to add a new element to the end of an array.

Example:
let arr = [1, 2];
arr.push(3);

console.log(arr); // [1, 2, 3]
Works fine for normal arrays ✅


🧠 Now Let’s Talk About Tuple
let user: [string, number] = ["Sharanya", 25];
This tuple says:
Index 0 → string
Index 1 → number
Only 2 elements allowed
So you might think:
“Push should not be allowed, right?”
🔥 But Here Is the Twist
TypeScript still allows push on tuples 😲
Example:
let user: [string, number] = ["Sharanya", 25];
user.push("extra");
console.log(user);
This works.

Now the array becomes:
["Sharanya", 25, "extra"]

❓ Why Does This Happen?
Because:
Tuple is technically a special kind of array
Under the hood, it is still an array.
And arrays have push().
So TypeScript allows it.

⚠️ Important
Even though push is allowed:
TypeScript will only allow values of types already defined in the tuple.

Example:
let user: [string, number] = ["Sharanya", 25];
user.push(true); // ❌ Error

Because tuple only allows:
string
number
So push must match those types.
🧠 But This Breaks the “Fixed Length” Idea

Originally:
[string, number]
means length = 2.
But after push:
Length becomes 3.
So tuple length is not strictly enforced at runtime.

🚀 How To Prevent Push?
Use readonly tuple:
let user: readonly [string, number] = ["Sharanya", 25];
user.push("extra"); // ❌ Error
Now push is not allowed.
Because readonly means:
You cannot modify it.

🎯 Final Simple Explanation
Tuple is a fixed-structure array.
push() still works because it is technically an array
It may break fixed length idea.
Use readonly to prevent modification.


🧠 Interview Level Question
Why does tuple allow push?
Answer:
Because tuples are arrays internally, and array methods are available unless restricted.