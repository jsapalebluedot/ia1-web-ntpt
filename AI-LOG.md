# AI-LOG — Development Process

This document records how AI assistance was used throughout the assignment, which suggestions were adopted or modified, and what work was completed manually.

## 1. Preparing the Repository

**AI tool:** ChatGPT (OpenAI)

**Request:** Asked for assistance with initializing the assignment workspace, connecting the starter project to a personal GitHub repository, and defining coding guidelines in `AGENTS.md`.

**Accepted:** Recommendations on project structure, ES modules, dependency restrictions, and development workflow.

**Modified:** Adjusted the project guidelines to fit the assignment requirements.

**Discarded:** None.

**Manual work:** Checked the local environment, cloned the starter repository, configured Git, created the remote repository, and performed the initial commit and push.

## 2. Defining the Implementation Requirements

**AI tool:** ChatGPT (OpenAI)

**Request:** Requested guidance on documenting the expected behavior of `cartTotal()` before writing the implementation.

**Accepted:** Suggestions for describing the function's inputs, calculation rules, invalid-data handling, and expected outputs.

**Modified:** Reviewed and refined the wording in `BRIEF.md` to align with the provided specification.

**Discarded:** None.

**Manual work:** Wrote and organized the brief in the project directory.

## 3. Building the cartTotal Function

**AI tool:** ChatGPT (OpenAI)

**Request:** Requested incremental help implementing the shopping-cart total calculation in `src/cart.js`.

**Accepted:** Logic for returning zero on an empty cart, accumulating item costs, applying VAT, calculating delivery fees, rounding the result, and rejecting invalid item values.

**Modified:** Repositioned the validation logic so that invalid prices and quantities are checked before the total is calculated.

**Discarded:** None.

**Manual work:** Entered the code into the project, reviewed the calculations, ran the existing test, and saved the implementation through Git commits.

## 4. Expanding Automated Test Coverage

**AI tool:** ChatGPT (OpenAI)

**Request:** Asked for additional test scenarios to verify normal calculations, invalid inputs, and delivery-fee boundaries.

**Accepted:** Tests for an empty cart, negative item prices, zero and fractional quantities, and subtotals below, equal to, and above the free-shipping threshold.

**Modified:** None.

**Discarded:** None.

**Manual work:** Added the test cases while preserving the original starter test, executed the test suite locally, confirmed eight passing tests, and pushed the updates.

## 5. Configuring Automated Checks

**AI tool:** ChatGPT (OpenAI)

**Request:** Asked how to set up project checks and execute them automatically after pushing changes to GitHub.

**Accepted:** The proposed npm syntax-check command and GitHub Actions workflow configuration.

**Modified:** None.

**Discarded:** None.

**Manual work:** Created `.github/workflows/ci.yml`, updated the npm scripts, committed the configuration, and checked the successful workflow run in GitHub Actions.

## 6. Recording AI Contributions

**AI tool:** ChatGPT (OpenAI)

**Request:** Asked for help producing an AI usage record that clearly separates generated suggestions from developer actions.

**Accepted:** A structured account of AI-supported implementation, testing, documentation, and CI setup.

**Modified:** Reworded and reorganized the entries to reflect the actual development sequence.

**Discarded:** None.

**Manual work:** Reviewed the entries, maintained `AI-LOG.md`, and committed and pushed the documentation.

## Validation Results

- Local automated testing: **8 passed, 0 failed**.
- GitHub Actions workflow: **successful** on the `main` branch.
- Changes are traceable through the repository's commit history.

## Notes

AI was used as a development assistant rather than as a replacement for verification. Suggested changes were incorporated into the project manually and checked through local testing and GitHub Actions.