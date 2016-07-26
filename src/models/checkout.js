import RuleEngine from '../core/rule_engine'
import FixtureDb from '../fixtures'

class Checkout {

  constructor(customer, order) {
    this.engine = new RuleEngine(FixtureDb.rules)
    this.order = order
    this.customer = customer
    this.total = this.engine.process(order)
  }

  getCustomer() {
    return this.customer
  }

  getOrder() {
    return this.order
  }

  getTotal() {
    return this.total
  }

}

export default Checkout
