import { Component } from 'react'
import Product from 'models/product'
import Customer from 'models/customer'
import Order from 'models/order'
import SalesView from 'containers/sales'
import CheckoutView from 'containers/checkout'

class Application extends Component {

  constructor(props) {
    super(props)
    this.state = { order: new Order(), checkout: false }
  }

  getCustomerList() {
    let customer = new Customer()
    return customer.getCustomers()
  }

  getProductList() {
    let product = new Product()
    return product.getProducts()
  }

  onCustomerChange(value) {
    if (!value) return
    let customer = new Customer()
    if (customer.find(value)) this.setState({ order: new Order(customer) })
  }

  onProductChange(value) {
    let product = null
    if (value.quantity == 0) return
    if (!this.state.order.updateItem(value.id, value.quantity)) {
      product = new Product()
      product.find(value.id)
      this.state.order.addItem(product.id, value.quantity, product.price)
    }
  }

  onCheckout(ev) {
    ev.preventDefault()
    if (this.state.order.validate()) {
      // change the view to checkout
      this.setState({ checkout:true })
    } else {
      alert('Please check your order.')
    }
  }

  onCancel() {
    this.setState({ checkout:false })
  }

  render() {
    return (
      <div>
        <h3 className="app-title">Advertisement Web Sale</h3>
        {this.state.checkout ? 
          <CheckoutView order={this.state.order}
            onCancel={this.onCancel.bind(this)} /> :
          <SalesView customers={this.getCustomerList()} 
            products={this.getProductList()} 
            onChangeCustomer={this.onCustomerChange.bind(this)}
            onChangeProduct={this.onProductChange.bind(this)}
            onCheckout={this.onCheckout.bind(this)} /> 
        }
      </div>
    )
  }
}

export default Application
