import FixtureDb from '../fixtures'

class Customer {

  constructor(id, name) {
    this.id = id
    this.name = name
  }

  getId() { return this.id }

  getName() { return this.name }

  getCustomers() {
    return [...FixtureDb.customers]
  }

  find(id) {
    let filtered = FixtureDb.customers.filter(customer => customer.id == id)
    if (filtered.length == 0) return false
    this.id = id
    this.name = filtered[0].name
    return true 
  }
}

export default Customer
