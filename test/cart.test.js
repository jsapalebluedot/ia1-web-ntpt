import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('negative price throws RangeError', () => {
  const items = [{ price: -100, qty: 2 }]

  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.throws(() => {
    cartTotal(items, options)
  }, RangeError)
})
test('zero quantity throws RangeError', () => {
  const items = [{ price: 100000, qty: 0 }]

  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.throws(() => {
    cartTotal(items, options)
  }, RangeError)
})

test('fractional quantity throws RangeError', () => {
  const items = [{ price: 100000, qty: 1.5 }]

  const options = {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000,
  }

  assert.throws(() => {
    cartTotal(items, options)
  }, RangeError)
})

const options = {
  vatRate: 0.08,
  freeShipFrom: 500000,
  shipFee: 30000,
}

// 1. Empty cart
test('empty cart returns zero', () => {
  assert.equal(cartTotal([], options), 0)
})

// 2. Below free shipping threshold
test('shipping fee applies below threshold', () => {
  const items = [{ price: 400000, qty: 1 }]
  assert.equal(cartTotal(items, options), 462000)
})

// 3. Exactly at free shipping threshold
test('free shipping at exact threshold', () => {
  const items = [{ price: 250000, qty: 2 }]
  assert.equal(cartTotal(items, options), 540000)
})

// 4. Above free shipping threshold
test('free shipping above threshold', () => {
  const items = [{ price: 300000, qty: 2 }]
  assert.equal(cartTotal(items, options), 648000)
})

test('negative quantity throws RangeError', () => {
  assert.throws(() => cartTotal([{ price: 100000, qty: -1 }], options), RangeError)
})

test('fractional total rounds to the nearest whole dong', () => {
  const roundingOptions = { vatRate: 0.08, freeShipFrom: 0, shipFee: 30000 }
  assert.equal(cartTotal([{ price: 101, qty: 1 }], roundingOptions), 109)
  assert.equal(cartTotal([{ price: 107, qty: 1 }], roundingOptions), 116)
})
