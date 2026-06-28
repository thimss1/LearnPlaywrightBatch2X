# JavaScript Learning Chapters


This repository contains organized code examples, keyboard shortcuts, and explanatory notes for learning core JavaScript concepts. Each chapter folder includes examples and tips for topics like identifiers, literals, operators, objects, asynchronous JavaScript, Playwright basics, modern module/import-export patterns, and introductory OOP concepts.


## Chapters

- **chapter_01_Basics:** JavaScript basics, commands, and getting started
- **chapter_02_Javascript_Concepts:** Introduction to JavaScript fundamental concepts
- **chapter_03_Identifier_Literals:** Understanding and working with identifiers, literals, and related tips
- **chapter_04_Javascript_Concepts:** `var`, `let`, `const`, function basics, scope, and hoisting examples
- **chapter_05_Literal:** Number, string, template literal, `null`, and `undefined` examples
- **chapter_06_Operator:** Arithmetic, modulus, exponentiation, comparison, logical, ternary, type, increment/decrement, and related operator practice
- **chapter_07_If_else:** `if`, `else if`, real-world branching examples, and conditional practice questions
- **chapter_14_Objects:** Object creation, references vs primitives, methods, destructuring, spread, getters/setters, and object-based exercises
- **chapter_15_2D_Array:** Chapter folder reserved for 2D array learning/examples
- **chapter_16_Callback:** Practical examples and explanations of JavaScript callbacks (anonymous, named, and arrow functions), callback parameters, synchronous and asynchronous callbacks, and the callback hell pattern. Useful for understanding async patterns in JavaScript/Playwright. Example files: `143_Callback.js`, `144_CB.js`, `145_CB_FN.js`, `146_PW_CB.js`, `147_JS_CB.js`, `148_Sync_CB.js`, `149_Async_CB.js`, `150_CB_Hell.js`, `151_CB_Hell_20_Steps.js`, `152_CB_Parameters.js`, `153_CB_Return.js`
- **chapter_17_Promise:** Promise creation, resolve/reject flows, `.then()`, `.catch()`, `.finally()`, API-style examples, `Promise.all()`, and Promise interview/practice questions
- **chapter_18_Async_Await:** `async`/`await` fundamentals, error handling with `try/catch/finally`, sequential vs parallel async execution, and Playwright-oriented async examples
- **chapter_19_Playwright_Basics:** Introductory Playwright project setup with test configuration, browser automation examples, generated login tests, and HTML reporting

- **chapter_20_Typescript_&_OOPs_Basics:** Import/export fundamentals, named and default exports, reusable helpers, logger utilities, classes, objects, constructors, private/public fields, static members, and beginner-friendly OOP examples

Chapters `08` through `13` are not currently present in this repository. More chapters and examples will be added as learning progresses.

## Chapter 17: Promise

- Covers Promise creation and lifecycle with `resolve` and `reject`
- Includes chaining with `.then()`, error handling with `.catch()`, and cleanup with `.finally()`
- Demonstrates API-style Promise handling and grouped async work with `Promise.all()` and `Promise.allSettled()`
- Example files: `154_Promise.js`, `155_Promise_REAL_API.js`, `156_Promise_REAL_API_PART2.js`, `157_Finally.js`, `158_Call_Py_Problem.js`, `159_Promise_ALL.js`, `160_Promise_IQ.js`

## Chapter 18: Async / Await

- Builds on Promises with `async` functions and `await`
- Demonstrates `try/catch/finally` patterns for async error handling
- Includes sequential and parallel async execution examples
- Adds Playwright-based async test examples and login-related practice
- Example files: `161_Async.js`, `162_Async_P2.js`, `163_PyODom.js`, `164_Async_Ex.spec.js`, `165_AA _Parallel.js`, `165_AA_Seq.js`, `166_IQ.js`, `167_ACLogin.js`

## Chapter 19: Playwright Basics

- Contains a standalone Playwright learning setup with its own `package.json` and `playwright.config.ts`
- Includes starter browser tests, title validation, and a generated TTACart login flow
- Uses the `tests` and `e2e` folders for Playwright specs and learning experiments
- Includes supporting project output such as `playwright-report` and reference material like `sdet.pdf`
- Example files: `playwright.config.ts`, `tests/example.spec.ts`, `tests/codegen-tta-cart.spec.ts`, `e2e/example.spec.ts`

## Chapter 20: Typescript & OOPs Basics

- Introduces reusable modules with `import` and `export`
- Shows named exports across helper files and a default export logger example
- Covers core OOP basics including classes, objects, constructors, attributes, and methods
- Includes practical examples using browser, test case, and car-based classes
- Demonstrates access control concepts with private/public fields and shared class behavior with `static` members
- Includes notes explaining default exports and how they differ from named exports
- Example files: `168_EXPORT_IMPORT.js`, `169_Utils.js`, `170_Logger.js`, `171_Class_Object.js`, `172_Class_Object2.js`, `173_Car.js`, `174_Real_Browser.js`, `175_IQ.js`, `176_Private_Public.js`, `177_Static.js`, `178_Static.js`, `utils.js`, `testutils.js`, `logger.js`, `ExplainDefault.md`

## Useful Tips

- See `VS_Code_keyboard_shortcut_windows.md` and `VS_Code_keyboard_shortcut_mac.md` in `chapter_03_Identifier_Literals` for helpful Visual Studio Code shortcuts.

---

## Contributing

Feel free to fork the repository and submit pull requests for improvements or additional learning examples!

## License

MIT License (add a LICENSE file if needed)

