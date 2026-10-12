# Project Rules — IA#1 cartTotal

## Stack
- Node.js 22+ with JavaScript ES Modules.
- Use native JavaScript only. No external dependencies.
- Use `import` and `export` syntax.

## Project Structure
- `src/cart.js`: implementation of `cartTotal(items, options)`.
- `test/cart.test.js`: automated tests.
- `package.json`: project configuration.

## Commands
- `npm test`: run tests using the built-in Node.js test runner.
- `git status`: inspect working tree changes.
- `git diff`: review changes before committing.

## Implementation Rules
- Follow the IA#1 specification.
- Return a number rounded to the nearest whole đồng.
- Return 0 for an empty cart.
- Apply VAT and shipping according to the specification.
- Throw `RangeError` for negative prices or invalid quantities.
- Keep the implementation simple and readable.

## Testing Rules
- Test the worked example and all required edge cases.
- Do not modify existing tests merely to make them pass.
- Run `npm test` after implementation changes.

## Never
- Never install external dependencies.
- Never modify `package.json` without permission.
- Never remove existing tests to hide failures.
- Never change unrelated files.
- Never claim tests pass without running them.