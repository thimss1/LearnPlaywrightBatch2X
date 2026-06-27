# Default Export in JavaScript (ES Modules)

## What is a Default Export?

A **default export** allows you to export **one main value** from a file.

That value can be:
- A function
- A class
- An object
- A variable
- An array

Each file can have **only one default export**.

---

## Syntax

### Export

```javascript
export default value;
```

or

```javascript
export default function functionName() {

}
```

---

## Example 1: Exporting a Function

### logger.js

```javascript
export default function log(message) {
    console.log(`[LOG] ${message}`);
}
```

---

## Importing a Default Export

```javascript
import log from "./logger.js";

log("Starting the test cases");
```

Output

```
[LOG] Starting the test cases
```

---

## Import Name Can Be Anything

Unlike named exports, the imported name does **not** have to match.

These are all valid:

```javascript
import log from "./logger.js";
```

```javascript
import logger from "./logger.js";
```

```javascript
import myLogger from "./logger.js";
```

```javascript
import abc from "./logger.js";
```

All import the exact same default export.

---

## Rules

✔ No curly braces when importing a default export.

```javascript
import log from "./logger.js";
```

❌ Incorrect

```javascript
import { log } from "./logger.js";
```

---

## Only One Default Export Per File

Correct

```javascript
export default function log() {}
```

Incorrect

```javascript
export default function log() {}
export default function test() {}
```

Only one default export is allowed.

---

# Mixing Default and Named Exports

A file can contain:

- One default export
- Multiple named exports

Example

### logger.js

```javascript
export default function log(message) {
    console.log(message);
}

export function logError(message) {
    console.error(message);
}

export function logWarning(message) {
    console.warn(message);
}
```

Import them together

```javascript
import log, { logError, logWarning } from "./logger.js";

log("Application Started");

logError("Database Error");

logWarning("Low Memory");
```

---

## Difference Between Default and Named Export

### Default Export

```javascript
export default function greet() {}
```

Import

```javascript
import greet from "./file.js";
```

No braces.

The imported name can be anything.

---

### Named Export

```javascript
export function greet() {}
```

Import

```javascript
import { greet } from "./file.js";
```

Uses braces.

The imported name must match unless renamed.

---

## Quick Comparison

| Default Export | Named Export |
|----------------|-------------|
| One per file | Multiple allowed |
| No braces | Uses braces |
| Name can be anything | Name must match |
| Main export | Secondary exports |

---

## Best Practice

Use **default exports** when the file has one primary purpose.

Examples

- Logger
- User class
- Configuration object
- Main utility function

Use **named exports** when the file contains multiple related utilities.

---

## Real Example

### utils.js

```javascript
export default function calculateTotal(price, tax) {
    return price + tax;
}
```

### app.js

```javascript
import calculateTotal from "./utils.js";

const total = calculateTotal(100, 8);

console.log(total);
```

Output

```
108
```

---

## Common Mistakes

### Mistake 1

```javascript
import { calculateTotal } from "./utils.js";
```

❌ Wrong

Should be

```javascript
import calculateTotal from "./utils.js";
```

---

### Mistake 2

Multiple default exports

```javascript
export default function one() {}

export default function two() {}
```

❌ Not allowed

---

### Mistake 3

Forgetting `default`

```javascript
export function log() {}
```

Then importing

```javascript
import log from "./logger.js";
```

❌ Wrong

Either

```javascript
export default function log() {}
```

or

```javascript
import { log } from "./logger.js";
```

---

# Summary

- A file can have only one default export.
- Default imports do not use curly braces.
- The imported name can be anything.
- A file can have one default export and multiple named exports.
- Use default exports when the file has one primary object or function.