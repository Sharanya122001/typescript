🧠 First: What is instanceof ?
instanceof means:
👉 “Are you created from this class?”
It checks if something belongs to a particular class.


🎯 Basic Example
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

Now:

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  }
}
🧠 What is Happening?

Before checking:

animal: Dog | Cat

TypeScript is confused 😵
It doesn’t know if animal is Dog or Cat.

But when we write:

if (animal instanceof Dog)

TypeScript says:

👉 “Inside this block, animal is definitely Dog.”

So it narrows:

Dog | Cat

to:

Dog

That is instanceof narrowing.

📦 Full Working Example
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // ✅ allowed
  } else {
    animal.meow(); // ✅ narrowed to Cat
  }
}

Inside:

if block → Dog

else block → Cat

TypeScript becomes smart.

🔎 Why It Works?

Because instanceof works only with classes.

It checks:

👉 Was this object created using new Dog() ?

Example:

const dog = new Dog();
console.log(dog instanceof Dog); // true
🧠 Important Rule

instanceof works only when:

You use class

Object created using new

It does NOT work with:

type Dog = { bark: () => void };

Because types are erased in JavaScript.

❌ Example Where It Won’t Work
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) { ❌ ERROR
  }
}

Why?

Because Dog here is not a class.
It’s just a TypeScript type.

🧃 Beginner Version Summary

instanceof narrowing means:

👉 “If object belongs to this class, treat it like that class inside block.”

🏁 Simple Comparison
Narrowing Type	Used For
typeof	string, number, boolean
"prop" in obj	object property check
instanceof	class check
🎓 Slightly More Advanced Example
class Admin {
  role = "admin";
}

class User {
  role = "user";
}

function checkRole(person: Admin | User) {
  if (person instanceof Admin) {
    console.log("Admin access");
  } else {
    console.log("User access");
  }
}

Here TypeScript narrows automatically.