🎯 What is never?
never means:
❌ “This value will NEVER happen.”
It represents a value that does not exist.

🧠 When Does never Happen?
There are mainly 3 situations.
    1️⃣ Function That Never Finishes
    2️⃣ TypeScript Knows Something Can Never Happen
    3️⃣ Variables That Can Never Have Value


🔥 Difference Between void and never
Many beginners confuse this.

void	                      never
Function finishes	          Function never finishes
Returns nothing	              Never returns at 


🚀 Advanced (Interview Level)
never is useful in:
Exhaustive checking in switch statements
Ensuring all union types are handled
Example:
type Shape = "circle" | "square";
function getArea(shape: Shape) {
  switch (shape) {
    case "circle":
      return 10;
    case "square":
      return 20;
    default:
      const check: never = shape; // Safety check
      return check;
  }
}
If someone later adds:
type Shape = "circle" | "square" | "triangle";

TypeScript will give error at never.
This forces you to handle all cases.
Very powerful 🔥