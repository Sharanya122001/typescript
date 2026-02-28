Narrowing means:
👉 Making a big type smaller and more specific


🧒 Example
let value: string | number;
This means:
value can be:
"hello"
100
TypeScript doesn’t know which one right now.
So it is a wide type.

🎯 Now What is Narrowing?
When you check the type using condition,
TypeScript becomes smarter.
Example:
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
Inside this block:
TypeScript now knows:
👉 value is definitely string
So it allows .toUpperCase()
That is narrowing.
We reduced:
string | number
to
string
🧠 Why It Happens?
Because TypeScript is smart.

When you check:
typeof value === "string"
It says:
"Ohhh, inside this block, it must be string."
So it narrows the type.

📦 Example 2 (With Objects)
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function speak(animal: Dog | Cat) {
    if ("bark" in animal) {
        animal.bark();
    }
}

Here:
animal is:
Dog | Cat
But when we check:
if ("bark" in animal)

TypeScript says:
👉 Only Dog has bark
👉 So inside this block, animal = Dog

That is narrowing.

🔍 When Does Narrowing Happen?
It happens when you use:
1️⃣ typeof
typeof value === "string"
2️⃣ in operator
"bark" in animal
3️⃣ instanceof
if (user instanceof Admin)
4️⃣ Equality check
if (value === null)
5️⃣ Truthy check
if (value)

TypeScript removes null/undefined inside block.



🧠 Why Do We Need Narrowing?
Because TypeScript must protect you.
Without narrowing:
let value: string | number;
value.toUpperCase(); ❌
Error.

Because what if it's number?
So you must prove first.
🎓 Beginner → Intermediate Example
Beginner
function print(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

Here:
In first block → string
In else → number
TypeScript narrows automatically.
🚀 Intermediate: Custom Type Guard

You can create your own narrowing logic.

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
    return (animal as Fish).swim !== undefined;
}

Now:

if (isFish(animal)) {
    animal.swim();  // narrowed to Fish
}

That animal is Fish is special syntax for narrowing.