🎯 What is an Interface?
An interface is a blueprint for an object.

It tells:
What properties an object must have
What types those properties should be

similar to type

Interface = A structure that defines how an object should look.


🧠 Simple Example
interface User {
  name: string;
  age: number;
}


This means:

Any object of type User must have:

name → string

age → number

🧩 Using It
let person: User = {
  name: "Sharanya",
  age: 25
};
✅ Correct

If you do:
let person: User = {
  name: "Sharanya"
};
❌ Error (age missing)

If you do:
let person: User = {
  name: "Sharanya",
  age: "25"
};
❌ Error (age must be number)

🧠 Think Like This
Interface = Rules
Object = Must follow rules


🚀 Why Do We Use Interfaces?
Makes code structured
Helps in large projects
Improves readability
Prevents mistakes


🧠 First Understand This
Both type and interface are used to:
Describe how something should look.
Most of the time, they look the same.
🎯 Basic Example (They Look Same)
Using type
type User = {
  name: string;
  age: number;
};
Using interface
interface User {
  name: string;
  age: number;
}
Usage:
let person: User = {
  name: "Sharanya",
  age: 25
};
Both work same here ✅

🍫 1️⃣ Difference: What They Can Describe
🟢 Interface
Interface is mainly used for objects and classes.
It describes shape of an object.

🔵 Type
Type is more powerful.
It can describe:
Objects
Unions
Primitives
Tuples
Functions
Example:
type ID = string | number;
Interface ❌ cannot do this.



🍭 2️⃣ Extending (Inheritance)

Both can extend.

Interface extending interface
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

Type extending type
type Animal = {
  name: string;
};

type Dog = Animal & {
  breed: string;
};


Interface uses extends
Type uses & (intersection)

🍬 3️⃣ Declaration Merging (Very Important)
This is a BIG difference.

Interface allows merging
interface User {
  name: string;
}

interface User {
  age: number;
}

TypeScript merges them:
User = {
  name: string;
  age: number;
}

Type ❌ does NOT allow this
type User = { name: string };
type User = { age: number }; // ❌ Error
You cannot declare same type twice.

🧠 Think Like This
Interface = Flexible school rule
Type = Strict rule

🍰 4️⃣ Class Usage
Interface is designed for OOP.
interface Person {
  name: string;
}

class Student implements Person {
  name: string;
}
Works perfectly.
You can do similar with type, but interface is preferred for classes.

🎯 When To Use What?
✅ Use Interface When:
Working with classes
Defining object shapes
Large OOP projects
When you need declaration merging

✅ Use Type When:
Using union types
Creating aliases
Creating tuples
Advanced type combinations

🧠 Super Simple Kid Summary
Interface = Blueprint for objects 🏠
Type = Blueprint for anything 🎨

🚀 Real Developer Advice
In real companies:
Use interface for objects
Use type for unions and advanced types

🎯 Final Short Table
                      type	 interface
Object	               ✅	  ✅
Union	               ✅	  ❌
Tuple	               ✅	  ❌
Merge declarations	   ❌	  ✅
Preferred for classes  ⚠️	   ✅