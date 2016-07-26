
function Engine(rules) {
  this.version = '1.0.0'
  this.rules = rules
}

Engine.prototype = {
  
  process(order) {
    let orderItems = [...order.items]
      , rules = this.getCustomerRules(order.customer)
      , hasRule = rules.length > 0
      , total = 0, subtotal = 0

    // there is no rule to process
    if (!hasRule) {
      return orderItems.reduce((prev, next) => {
        return (prev + next.price)
      }, 0.0)
    }

    // process rules
    orderItems.forEach(item => {
      subtotal = rules.map(rule => {
        let _val = this.processRule(item, rule)
        return _val
      }).reduce((prev, next) => {
        return (prev + next)
      }, 0)

      // any rule was fired
      if (subtotal == 0.0) subtotal = (item.quantity * item.price)
      total = total + subtotal
    })

    return total
  },

  getCustomerRules(customerId) {
    return this.rules.filter(rule => rule.customer === customerId)
  },

  processRule(item, rule) {
    let { condition } = rule

    // this rule is applied to any product
    if (condition.product === 'any') {
      if (item.quantity > condition.at_least) {
        let qtt = item.quantity - condition.next
        return (qtt * item.price)
      }
      return (item.quantity * item.price)
    }

    // this rule does not apply for this product
    if (condition.product !== item.product) {
      return 0
    }

    if (condition.at_least == 0 && condition.next == 0) {
      return (item.quantity * rule.result)
    }

    if (item.quantity >= condition.at_least && condition.next == 0) {
      return (item.quantity * rule.result)
    }

    if (item.quantity > condition.at_least && condition.next > 0) {
      return ((item.quantity - condition.next) * item.price)
    }

    return 0 // any condition satisfied
  }

}

export default Engine
