# IA#1 — Self-Assessment

## 1. Behaviour (30 points)

The `cartTotal()` function calculates the subtotal, VAT, and shipping fee according to the assignment specification. It returns zero for an empty cart, applies free shipping at the required threshold, and rounds the final result using `Math.round()`.

Invalid prices and quantities are handled using `RangeError`.

**Self-assessment:** 30/30

## 2. Tests (20 points)

The project contains eight automated tests covering the provided example, empty cart, negative price, zero quantity, fractional quantity, and three shipping-threshold scenarios.

All eight tests pass locally.

**Self-assessment:** 18/20

## 3. Development Harness (20 points)

The repository includes project instructions in `AGENTS.md`, npm scripts for automated checks, Prettier formatting verification, and a GitHub Actions workflow that runs on push and pull requests.

The latest GitHub Actions run completed successfully.

**Self-assessment:** 19/20

## 4. Task Brief (15 points)

`BRIEF.md` describes the implementation scope, input contract, calculation rules, error handling, worked example, and acceptance criteria.

**Self-assessment:** 14/15

## 5. AI Usage Log (15 points)

`AI-LOG.md` documents the AI tools used, suggestions accepted or modified, manual development activities, and verification steps.

**Self-assessment:** 14/15

## Overall Assessment

| Criterion | Maximum Score | Self-Assessed Score | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | `src/cart.js` implements the required calculations, validation, and rounding. |
| Tests | 20 | 18 | `test/cart.test.js` contains eight passing tests covering valid and invalid inputs. |
| Development Harness | 20 | 19 | `AGENTS.md`, npm checks, Prettier, and successful GitHub Actions CI. |
| Task Brief | 15 | 14 | `BRIEF.md` documents the scope, contract, calculations, and acceptance criteria. |
| AI Usage Log | 15 | 14 | `AI-LOG.md` records AI assistance, modifications, and manual work. |
| **Total** | **100** | **95** | |


These scores are estimates based on the implemented features and available verification results, not official grading results.