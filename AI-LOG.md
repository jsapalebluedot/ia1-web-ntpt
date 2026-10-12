# AI Usage Log

## AI Tool Used

- Tool: ChatGPT (OpenAI)
- Purpose: Assist with implementing, understanding, testing, and setting up CI for the `cartTotal` assignment.

## AI-Assisted Work

1. **Implementation:** ChatGPT suggested JavaScript code for empty-cart handling, subtotal calculation, VAT, shipping, rounding, and input validation in `src/cart.js`.
2. **Testing:** ChatGPT suggested test cases for the example calculation, empty cart, negative prices, zero and fractional quantities, and shipping thresholds. The provided example test was already part of the starter project.
3. **Development Harness:** ChatGPT guided the creation of project instructions, an npm syntax-check script, and a GitHub Actions CI workflow.
4. **Documentation:** ChatGPT helped structure the task brief and this AI usage log.

## Human Contributions

- Reviewed and manually entered the suggested code.
- Ran `npm test` locally and checked the results.
- Corrected the placement of input validation so it runs before calculations.
- Created commits and pushed changes to GitHub.
- Checked that the GitHub Actions workflow completed successfully.

## Verification

- Local tests: 8 passed, 0 failed.
- GitHub Actions: CI workflow completed successfully on the `main` branch.
- The implementation and tests can be inspected in the repository's Git history.

## Limitations

AI suggestions were not accepted as proof of correctness by themselves. The code was checked using automated tests and CI. The current npm `lint` script performs JavaScript syntax checks rather than full ESLint-style analysis.