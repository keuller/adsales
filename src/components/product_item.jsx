import { Component } from 'react'

class ProductItem extends Component {

  constructor(props) {
    super(props)
  }

  onUpdate(ev) {
    let quantity = parseInt(ev.target.value)
    if (!isNaN(quantity)) {
      this.props.onChange({ id: this.props.product.id, quantity })
    } else {
      this.props.onChange({ id: this.props.product.id, quantity: 0 })
    }
  }

  render() {
    return (
      <tr>
        <td>{this.props.product.name}</td>
        <td style={{textAlign:'center'}}>
          <input type="text" size="5" maxLength="2" 
            onBlur={this.onUpdate.bind(this)} />
        </td>
        <td className="table-cell_right">$ {this.props.product.price}</td>
      </tr>
    )
  }

}

export default ProductItem
