# IA#1 — cartTotal Implementation Brief

## 1. Task
Implement the `cartTotal(items, options)` function for a JavaScript shopping cart.

## 2. Scope
- Allowed file: `src/cart.js`
- Preserve existing tests in `test/cart.test.js`; add specification-based edge-case tests when needed.
- Do not modify `package.json`.
- Do not create or modify unrelated files.
- Do not install external dependencies.

## 3. Input Contract

The function must accept two arguments:

**items:** An array of shopping cart items.

Each item contains:
- `name`: Product name.
- `price`: Unit price in VND.
- `qty`: Quantity purchased.

**options:** An object containing:
- `vatRate`: VAT rate (e.g., 0.08 for 8%).
- `freeShipFrom`: Subtotal threshold for free shipping.
- `shipFee`: Shipping fee when the threshold is not reached.

## 4. Calculation Contract

1. Calculate the subtotal by summing `price * qty` for all items.
2. Calculate VAT as `subtotal * vatRate`.
3. If `subtotal >= freeShipFrom`, shipping is 0. Otherwise, shipping is `shipFee`.
4. Calculate the total as `subtotal + VAT + shipping`.
5. Use Math.round() on the final total and do not use toFixed(0) to return a string.
6. Return the result as a JavaScript number.

For an empty cart, return `0` without VAT or shipping.

## 5. Worked Example

Input:
```javascript
cartTotal(
  [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 }
  ],
  {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000
  }
)
```

Expected output: `467400` (number).

## 6. Error Handling

The function must validate each cart item.

- If `price` is negative, throw a `RangeError`.
- If `qty` is not a positive integer, throw a `RangeError`.
- Invalid quantities include `0`, negative numbers, and fractional numbers.
- Do not silently skip invalid items.
- Do not automatically correct invalid values.

An empty cart is valid and must return `0`.

## 7. Acceptance Criteria

The implementation is complete when:

- The worked example returns `467400` as a number.
- An empty cart returns `0`.
- Shipping is free when the subtotal reaches `freeShipFrom`.
- A negative price throws `RangeError`.
- A zero, negative, or fractional quantity throws `RangeError`.
- The final total is rounded to the nearest whole VND.
- No external dependencies are added.
- Implementation changes stay in `src/cart.js`; test additions stay in `test/cart.test.js`.
- All existing tests pass using `npm test`.
