// Decimal Number
const decimalNumber = 42;
console.log('Decimal:', decimalNumber);

// Decimal with numeric separator
const decimalWithSeparator = 1_000_000;
console.log('Decimal with separator:', decimalWithSeparator);

// Floating Point Number
const floatNumber = 3.14159;
console.log('Floating point:', floatNumber);

// Floating point with trailing decimal
const floatTrailing = 42.;
console.log('Float (trailing decimal):', floatTrailing);

// Floating point with leading decimal
const floatLeading = .5;
console.log('Float (leading decimal):', floatLeading);

// Floating point with numeric separator
const floatWithSeparator = 12_345.678_901;
console.log('Float with separator:', floatWithSeparator);

// Exponential (scientific notation)
const exponentialNumber = 2.5e3; // 2.5 * 10^3 = 2500
console.log('Exponential:', exponentialNumber);

// Small exponential literal
const smallExponential = 1e-7;
console.log('Small exponential:', smallExponential);

// Large exponential literal with separator
const largeExponential = 9.81e+20;
console.log('Large exponential:', largeExponential);

// Binary Number (prefix 0b or 0B)
const binaryNumber = 0b101010; // 42 in binary
console.log('Binary:', binaryNumber);

// Binary with numeric separator
const binaryWithSeparator = 0b1111_0000_1010_0101;
console.log('Binary with separator:', binaryWithSeparator);

// Octal Number (prefix 0o or 0O)
const octalNumber = 0o52; // 42 in octal
console.log('Octal:', octalNumber);

// Octal with numeric separator
const octalWithSeparator = 0o123_456;
console.log('Octal with separator:', octalWithSeparator);

// Hexadecimal Number (prefix 0x or 0X)
const hexNumber = 0x2A; // 42 in hex
console.log('Hexadecimal:', hexNumber);

// Hexadecimal with numeric separator
const hexWithSeparator = 0xff_ff_ff;
console.log('Hexadecimal with separator:', hexWithSeparator);

// BigInt (suffix n)
const bigIntNumber = 9007199254740991n;
console.log('BigInt:', bigIntNumber);

// BigInt with numeric separator
const bigIntWithSeparator = 123_456_789_012_345_678_901n;
console.log('BigInt with separator:', bigIntWithSeparator);

let story_courtney = 'Courtney’s Code Adventure: A Playwright Tale

Courtney had always been curious about technology. She’d tried her hand at HTML and CSS, fiddled with a few lines of JavaScript, and even built a simple personal website. But the world of end-to-end web automation was, until now, a distant star—twinkling promisingly, yet hovering just beyond her grasp. That was about to change.

One rainy Saturday morning, Courtney sat cross-legged at her kitchen table, laptop open, a mug of tea gently steaming at her side. She’d been chatting with a friend at work who’d mentioned something called Playwright—a tool, he explained, for automating browsers in ways testers and developers could only dream of a decade ago.

“The best part is, it covers Chrome, Firefox, and even Safari,” her friend had said, grinning. “You can write once and test everywhere. It’s like magic.”

Setting the Stage

Her curiosity piqued, Courtney searched for “Playwright automation.” The documentation was neat and inviting. The more she read, the more it made sense: Playwright let you automate browsers—open pages, fill out forms, click buttons, all using code. She pictured the mundane, repetitive tasks she could offload and the confidence in her apps she could gain from comprehensive automated testing.

Her heart beat a little faster. She’d try it today. But first, she needed an environment. She installed Node.js, and then Playwright with a single command in her terminal:

Bash
npm init playwright@latest
The script whirred, and within minutes, she had the basic structure for a testing project. There were example test files, configuration files, even simple explanations inside the README.

Her First Script

Courtney browsed the examples Playwright had generated. One snippet caught her eye. Would it really be this simple? She created a file called example.spec.ts and wrote her first Playwright test:

Javascript

Apply
const { test, expect } = require('@playwright/test');

test('homepage has welcome text', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page.locator('text=Get started')).toBeVisible();
});
"Run npx playwright test," the docs advised. Her anticipation mounted. She ran the command, and the test runner sprang into action. A browser instance flickered on her screen, sped through the Playwright homepage, and closed.

Test passed.

Courtney felt a delightful rush—the thrill of watching code interact with the real world (or at least, the world of the Web).

Learning by Doing

For the rest of the morning, Courtney explored. She wrote tests to search for her favorite books on an online store, fill out login forms with dummy data, and check error messages for missing input.

When she needed help, Playwright’s documentation and their community forum proved invaluable. If something didn’t quite work, she’d find a tip explaining why the locator didn’t match, or advice on waiting for the page to load.

Bit by bit, her tests grew more sophisticated. Playwright, she discovered, supported recording scripts, handling multiple browser tabs, uploading files, intercepting network requests, and more.

A Problem to Solve

Mid-afternoon, with sunlight breaking through the clouds, Courtney stared at her own website. She remembered a bug: sometimes, after a deployment, the newsletter sign-up form would silently fail. She decided to automate its testing.

She wrote a Playwright script that visited her site, found the “Subscribe” button, entered a test email, and submitted the form. The script then checked for the success message. If it failed, Playwright would take a screenshot and log the error.

The script saved her. When she deliberately broke the backend, the test caught it right away. She imagined running these kinds of checks with every new code change—no more embarrassing bugs slipping through.

Going Deeper

With confidence, Courtney explored advanced features. She used the Playwright Inspector to debug failing tests, learning to step through actions visually. She experimented with parallel test execution, making her suite run much faster.

Soon, she was writing custom fixtures—reusable bits of setup and teardown code—so her tests always started with a clean database state. She even integrated Playwright with GitHub Actions, so that every time she pushed code, the tests ran automatically.

Along the way, she picked up handy JavaScript tips and learned how asynchrony worked in real-world applications.

A Helpful Community

Courtney sometimes hit hurdles—strange errors, timeouts, browsers not launching in her test pipeline. Whenever she got stuck, she reached out to the Playwright community. She answered beginner questions herself as she grew more experienced.

Users shared snippets, debugged issues, and even welcomed her feedback. It felt like progress wasn’t just measured in tests written, but in connections made.

Looking Back, and Forward

By the end of the month, Courtney’s project was humming. Bugs were caught early, new features shipped with confidence, and her coworkers admired her tenacity in learning something new.

One evening, she reflected with her friend, who had first mentioned Playwright. “I didn’t know testing could feel so creative!” she said. “It’s like teaching a robot how to check my website while I sleep.”

Her friend laughed. “That’s the secret. Automation empowers us—and frees us to focus on the fun part: building.”

Courtney smiled, thinking of all she’d learned. Playwright had once felt like a distant star. Now, it was the engine powering her journey—and illuminating new corners of the web.

The End (and a New Beginning)

Courtney fell in love with the rhythm of testing: write, run, refine, repeat. And as she drifted off to sleep, she dreamed not only of bug-free launches but of new possibilities, where technology and her curiosity would always keep her learning—one script at a time.

This story aims to be motivational, share a learning path, and introduce practical elements of Playwright in Courtney’s voice. If you’d like, I can provide a step-by-step Playwright tutorial as a follow-up!'';

