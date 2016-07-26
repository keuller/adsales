let test = require('tape')
  , Order = require('../src/models/order').default

test('Create new Order Test', (t) => {
  t.plan(2)

  let customer = { id: '121-hgf', name: 'Unileve' }
    , order = new Order(customer)
  
  order.addItem('classic', 2, 269.99)

  t.notEqual(order.id, '', 'Order must have an ID')
  t.equal(order.validate(), true, 'Order must be valid')
})
