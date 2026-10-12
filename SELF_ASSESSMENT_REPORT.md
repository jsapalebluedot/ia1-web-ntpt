# IA#1 — Self-Assessment

Repository: https://github.com/jsapalebluedot/ia1-web-ntpt

| Criterion | Maximum | Claimed | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | src/cart.js: empty-cart return, validation loop, subtotal-based shipping and Math.round; test/cart.test.js: worked example and rounding tests. |
| Tests | 20 | 20 | test/cart.test.js: worked example, empty cart, below/exact/above threshold, negative price, zero/fractional/negative quantity, fractional-total rounding. Run npm test. |
| Harness | 20 | 16 | AGENTS.md: stack, commands and never rules; package.json: npm test and npm run lint (native syntax checks); .github/workflows/ci.yml: both checks on push/PR. Latest remote CI not verified in this review. |
| Brief | 15 | 14 | BRIEF.md: scope, input/calculation contract, error cases, no dependencies and acceptance criteria. |
| AI-LOG.md | 15 | 12 | AI-LOG.md: tools, accepted/modified suggestions, manual contributions and dated correction entry; timing of original entries is not established. |
| **Total** | **100** | **92** | Self-assessed estimate, subject to instructor grading. |

## What I did not manage / remaining limitations

- No recorded evidence establishes the initial red test run or that every implementation diff was reviewed at the time.
- The latest remote CI run after these corrections still needs verification after pushing.
- The final ZIP must be named 24127248_92.zip and include the repository and these documents. Student ID: 24127248; exclude node_modules.

The original Prettier addition conflicted with the dependency restriction. It has been removed from the final package configuration and CI; its history is disclosed in AI-LOG.md. The lint command checks JavaScript syntax only.
