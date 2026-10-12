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

| Category | Estimated Score |
|---|---:|
| Behaviour | 30/30 |
| Tests | 18/20 |
| Development Harness | 19/20 |
| Task Brief | 14/15 |
| AI Usage Log | 14/15 |
| **Total** | **95/100** |

These scores are estimates based on the implemented features and available verification results, not official grading results.