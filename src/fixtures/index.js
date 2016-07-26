let customers = [
  { id: '900-abc', name: 'John Doe' },
  { id: '121-hgf', name: 'Unilever' },
  { id: '207-edc', name: 'Apple' },
  { id: '775-kmn', name: 'Nike' },
  { id: '350-xyz', name: 'Ford' }
]

let products = [
  { id:'classic', name:'Classic Ad', price: 269.99 },
  { id:'standout', name:'Standout Ad', price: 322.99 },
  { id:'premium', name:'Premium Ad', price: 394.99 }
]

let rules = [
  { id:'76381', customer: '121-hgf', condition: { product:'any', at_least: 2, next: 1 }, result: 0.0 },
  { id:'87239', customer: '207-edc', condition: { product:'standout', at_least: 0, next: 0 }, result: 299.99 },
  { id:'30274', customer: '775-kmn', condition: { product:'premium', at_least: 4, next: 0 }, result: 379.99 },
  { id:'13843', customer: '350-xyz', condition: { product:'classic', at_least: 4, next: 1 }, result: 0.0 },
  { id:'45598', customer: '350-xyz', condition: { product:'standout', at_least: 0, next: 0 }, result: 309.99 },
  { id:'78720', customer: '350-xyz', condition: { product:'premium', at_least: 3, next: 0 }, result: 389.99 }
]

let orders = [
  { id:'503', customer:'900-abc', items: [{ product: 'classic', quantity: 1, price: 269.99 }, { product: 'standout', quantity: 1, price: 322.99 }, { product: 'premium', quantity: 1, price: 394.99 }] },
  { id:'150', customer:'121-hgf', items: [{ product: 'classic', quantity: 3, price: 269.99 }, { product: 'premium', quantity: 1, price: 394.99 }] },
  { id:'200', customer:'207-edc', items: [{ product: 'standout', quantity: 3, price: 322.99 }, { product: 'premium', quantity: 1, price: 394.99 }] },
  { id:'007', customer:'775-kmn', items: [{ product: 'premium', quantity: 4, price: 394.99 }] },
  { id:'825', customer:'350-xyz', items: [{ product: 'classic', quantity: 4, price: 269.99 }, { product:'standout', quantity: 1, price: 322.99 }] }
]

export default {
  customers,
  products,
  rules,
  orders
}
