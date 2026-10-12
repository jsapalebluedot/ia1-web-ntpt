export function cartTotal(items, options) {
  if (items.length === 0) {
    return 0
  }

  // Validate items before calculating
  for (const item of items) {
    if (item.price < 0) {
      throw new RangeError('Price cannot be negative')
    }

    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError('Quantity must be a positive integer')
    }
  }

  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => {
    return sum + item.price * item.qty
  }, 0)

  // Calculate VAT
  const vat = subtotal * options.vatRate

  // Calculate shipping
  let shipping = 0

  if (subtotal < options.freeShipFrom) {
    shipping = options.shipFee
  }

  // Return rounded total
  return Math.round(subtotal + vat + shipping)
}
