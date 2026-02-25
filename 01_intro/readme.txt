types:--------->
number
string
boolean
null
void
undefined
object
array
tuple
any
unknown
never


everything in the TS is in lowercase

syntax:
let variableName:type=value


export{}
It means:
“This file is a module.”
🧠 Why Do We Need It?

In TypeScript, there are 2 types of files:
1️⃣ Script File (Old style)
Everything is global
Variables can conflict

2️⃣ Module File (Modern style)
Variables are private to the file
No global pollution
Safer

TypeScript treats a file as a module only if it has:
import
or export
If not → it becomes a script.

🔴 Problem Without export {}
Example:
file1.ts
let user = "Sharanya";

file2.ts
let user = "Rahul";

If these are script files, TypeScript may say:
Cannot redeclare block-scoped variable 'user'
Because both become global.
✅ Fix Using export {}
Add this at bottom:
export {};
Now TypeScript treats each file as a module.

Now:
user in file1 is private
user in file2 is private
No conflict

🔥 Important
export {} does NOT export anything.
It just tells TypeScript:
“Hey, this is a module.”