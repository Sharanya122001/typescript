why <T,> not just <T>....................
😲 Then Why Add That Comma?
That comma is mainly used in React + TypeScript when writing arrow functions.
Because sometimes TypeScript gets confused.

🚨 The Real Problem
Look at this:
const myFunction = <T>(value: T) => {
    return value;
}

In a normal .ts file → OK ✅
But in a .tsx file (React file) → ❌ Error

Why?
Because TypeScript thinks:
<T>
is a JSX tag like HTML!
It thinks you are writing:
<T>something</T>
So it gets confused 😵

✅ Solution: Add a Comma
const myFunction = <T,>(value: T) => {
    return value;
}
Now TypeScript understands:
👉 “Ohhh this is generics, not JSX.”
The comma removes confusion.