import Guid from 'guid'
import FixtureDb from '../fixtures'

class Order {

  constructor(customer) {
    this.id = Guid.raw()
    this.customer = (customer != null && customer != undefined) ? customer.id : ''
    this.items = []
    this.balance = 0.0
  }

  addItem(product, quantity, price) {
    this.items.push({ product, quantity, price })
    this.updateBalance()
    return true
  }

  updateItem(product, quantity) {
    let _updated = false
    let _tmp = this.items.map(item => {
      if (item.product == product) {
        _updated = true
        return Object.assign({}, item, { product, quantity })
      }
      return item
    })
    if (_updated) this.items = _tmp
    return _updated
  }

  removeItem(product) {
    this.items = this.items.filter(item => item.product !== product)
    this.updateBalance()
    return true
  }

  updateBalance() {
    this.balance = this.items.reduce((prev, next) => {
      return prev + (next.quantity * next.price) 
    }, 0.0)
  }

  find(id) {
    let records = FixtureDb.orders.filter(order => order.id == id)
    if (records.length == 0) return false
    this.id = id
    this.customer = records[0].customer
    this.items = records[0].items
    return true
  }

  validate() {
    if (this.customer == '' || this.customer == null) return false
    if (this.items.length < 1) return false
    return true
  }

}

export default Order
