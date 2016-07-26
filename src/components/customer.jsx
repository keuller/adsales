import { Component } from 'react'

class CustomerSelector extends Component {

  constructor(props) {
    super(props)
  }

  getValues() {
    let values = this.props.customers.map((customer, idx) => {
      return <option key={`c-${idx}`} value={customer.id}>{customer.name}</option>
    })
    values.splice(0, 0, <option key="c-00" value="">Choose a customer</option>)
    return values
  }

  onSelect(ev) {
    ev.preventDefault()
    this.props.onSelectCustomer(ev.target.value)
  }

  render() {
    return (
      <div className="customer-box">
        <label className="customer-label" htmlFor="customer">Customer:</label>
        <select id="customer" className="customer-field" onChange={this.onSelect.bind(this)}>
          {this.getValues()}
        </select>
      </div>
    )
  }

}

export default CustomerSelector
