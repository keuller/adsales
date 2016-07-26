import { Component } from 'react'
import CustomerSelection from 'components/customer'
import ProductList from 'components/products'

class SalesView extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <CustomerSelection customers={this.props.customers} 
          onSelectCustomer={this.props.onChangeCustomer} />
        <ProductList products={this.props.products} 
          onChangeQuantity={this.props.onChangeProduct} />
        <br/>
        <div style={{textAlign:'center'}}>
          <button className="checkout-button" 
            onClick={this.props.onCheckout}>CHECKOUT</button>
        </div>
      </div>
    )
  }
}

export default SalesView
