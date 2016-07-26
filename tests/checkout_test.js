
let test = require('tape')
  , Checkout = require('../src/models/checkout').default
  , Order = require('../src/models/order').default
  , checkout = null

test('Process John\'s Doe rule test', (t) => {
  t.plan(1)

  let order = new Order()
    , expected = 987.97

  if (!order.find('503')) {
    return t.fail('The order with ID 503 not found.')
  }

  checkout = new Checkout({}, order)
  t.equal(checkout.getTotal(), expected, `Total expected \$${expected}`)
})


test('Process Unilever Test', (t) => {
  t.plan(1)

  let order = new Order()
    , expected = 934.97
    
  if (!order.find('150')) {
    return t.fail('The order with ID 150 not found.')
  }

  checkout = new Checkout({}, order)
  t.equal(checkout.getTotal(), expected, 'total expected $934.97')
})


test('Process Apple Test', (t) => {
  t.plan(1)

  let order = new Order()
    , expected = 1294.96

  if (!order.find('200')) {
    return t.fail('The order with ID 200 not found.')
  }

  checkout = new Checkout({}, order)
  t.equal(checkout.getTotal(), expected, `Total expected \$${expected}`)
})


test('Process Nike Test', (t) => {
  t.plan(1)

  let order = new Order()
    , expected = 1519.96

  if (!order.find('007')) {
    return t.fail('The order with ID 007 not found.')
  }

  checkout = new Checkout({}, order)
  t.equal(checkout.getTotal(), expected, `Total expected \$${expected}`)
})


test('Process Ford Test', (t) => {
  t.plan(1)

  let order = new Order()
    , expected = 1389.95
    , total = 0

  if (!order.find('825')) {
    return t.fail('The order with ID 825 not found.')
  }

  checkout = new Checkout({}, order)
  t.equal(checkout.getTotal(), expected, `Total expected \$${expected}`)
})
