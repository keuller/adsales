import { Component } from 'react'
import ProductItem from 'components/product_item'

class ProductList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table>
        <thead>
          <tr className="table-product__header">
            <th>Advertisement Plan</th>
            <th style={{width:'10%'}}>Quantity</th>
            <th style={{width:'10%'}}>Unit. Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((product, idx) => <ProductItem key={`k-${idx}`} product={product} onChange={this.props.onChangeQuantity} />)}
        </tbody>
        <tfoot>
          <tr className="table-product__footer">
            <td colSpan="2">Order Total:</td>
            <td className="table-product__total">$ 0.0</td>
          </tr>
        </tfoot>
      </table>
    )
  }

}

export default ProductList
