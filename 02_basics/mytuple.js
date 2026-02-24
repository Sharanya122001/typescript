"use strict";
//tuples
//An array with fixed length and fixed types in order.
Object.defineProperty(exports, "__esModule", { value: true });
//🔥 Tuple Example
// let user: [string, number] = ["Sharanya", 25];
// Now this means:
// First value → MUST be string
// Second value → MUST be number
// Only 2 values allowed
// Order matters
// ❌ Wrong Examples
// let user: [string, number] = [25, "Sharanya"];
// ❌ Error (wrong order)
// let user: [string, number] = ["Sharanya"];
// ❌ Error (missing value)
// let user: [string, number] = ["Sharanya", 25, true];
// ❌ Error (extra value)
// 🎯 Correct Tuple Syntax
// let user: [string, number];
// Why square brackets?
// Because:
// Tuple is a special type of array with fixed structure.
// So TypeScript uses:
// [type1, type2, type3]
// That syntax means tuple.
//🔥 Why Comma ,?
// The comma separates the types by position.
// Example:
// [string, number, boolean]
// Means:
// index 0 → string
// index 1 → number
// index 2 → boolean
// Order matters 🔥
// 🎨 Visual Understanding
// Think like this:
// [string, number]
//    ↑        ↑
//  position 0  position 1
//🧠 Interview Level Concept
// Tuples are commonly used when:
// Returning multiple values from a function
// Storing fixed structured data
// Representing coordinates
var user = ["hc"];
