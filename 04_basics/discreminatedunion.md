🧠 First: What is a Union?

A union means:

“This value can be ONE of these types.”

Example:

type Dog = { bark: () => void };
type Cat = { meow: () => void };

type Animal = Dog | Cat;

So Animal can be:

Dog

OR Cat

🚨 The Problem

Now look:

function speak(animal: Animal) {
  animal.bark(); // ❌ Error
}

Why error?

Because TypeScript says:

“What if it’s a Cat?”

So we must help TypeScript understand which one it is.

🎯 Solution: Discriminated Union

A discriminated union is:

A union where each type has a common property
that tells us what type it is.

This special property is called:

discriminator

tag

kind

type

(any name is fine)

✅ Example (Correct Way)
type Dog = {
  type: "dog";
  bark: () => void;
};

type Cat = {
  type: "cat";
  meow: () => void;
};

type Animal = Dog | Cat;

Notice:

Both have type property.

But:

Dog → type: "dog"

Cat → type: "cat"

That string literal is the magic.

🧠 Now Watch Narrowing
function speak(animal: Animal) {
  if (animal.type === "dog") {
    animal.bark(); // ✅ works
  } else {
    animal.meow(); // ✅ works
  }
}

Why does this work?

Because TypeScript sees:

animal.type === "dog"

So it knows:

👉 “This must be Dog.”

It narrows automatically.

That’s discriminated union.

🧒 Super Simple Explanation

Think like this:

Every animal is wearing a badge:

🐶 Dog → badge says "dog"
🐱 Cat → badge says "cat"

You check the badge.

Then you know what powers it has.

🧪 Real World Example (Very Common)
type Success = {
  status: "success";
  data: string;
};

type Error = {
  status: "error";
  message: string;
};

type Response = Success | Error;

Usage:

function handle(res: Response) {
  if (res.status === "success") {
    console.log(res.data);
  } else {
    console.log(res.message);
  }
}

Very clean.
Very safe.
Very powerful.

🔥 Why Is This Important?

Discriminated unions give you:

✔ Perfect type safety
✔ Smart autocomplete
✔ No runtime errors
✔ Cleaner logic

This is heavily used in:

Redux

API responses

React state

State machines

🧠 Structure Rule (Very Important)

To make a discriminated union:

Union of multiple types

All types must share ONE common property

That property must be a literal type (like "dog", "cat")

🎯 Final Definition (Interview Ready)

A discriminated union is a union of object types that share a common literal property used to narrow the type safely.