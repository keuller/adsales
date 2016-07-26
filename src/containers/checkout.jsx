import { Component } from 'react'
import Product from 'models/product'
import Checkout from 'models/checkout'

class CheckoutView extends Component {

  constructor(props) {
    super(props)
    let checkout = new Checkout(this.props.customer, this.props.order)
      , discount = (this.props.order.balance - checkout.total)
    this.state = { checkout, discount }
  }

  renderItems() {
    let product = new Product()
    return (
      <tbody>
        {this.props.order.items.map((item, idx) => {
          product.find(item.product)
          return (<tr key={`p-${idx}`}>
            <td>{product.getName()}</td>
            <td style={{textAlign:'center'}}>{item.quantity}</td>
            <td style={{textAlign:'right'}}>$ {item.price.toFixed(2)}</td>
          </tr>)
        })}
      </tbody>
    )
  }

  renderFooter() {
    return (
      <tfoot className="table-product__footer">
        <tr className="table-product__footer">
          <td colSpan="2">Total Items:</td>
          <td className="table-product__total">$ {this.props.order.balance}</td>
        </tr>
        <tr>
          <td colSpan="2">Discount:</td>
          <td className="table-product__total">$ {this.state.discount.toFixed(2)}</td>
        </tr>
        <tr>
          <td colSpan="2">Order Total:</td>
          <td className="table-product__total">$ {this.state.checkout.total.toFixed(2)}</td>
        </tr>
      </tfoot>
    )
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr className="table-product__header">
              <th>Product</th>
              <th style={{width:'10%'}}>Quantity</th>
              <th style={{width:'10%'}}>Price</th>
            </tr>
          </thead>
            {this.renderItems()}
            {this.renderFooter()}
        </table>
        <div style={{textAlign:'center', paddingTop:'8px'}}>
          <button className="checkout-button" onClick={this.props.onCancel}>CLOSE</button>
        </div>
      </div>
    )
  }
}

export default CheckoutView
