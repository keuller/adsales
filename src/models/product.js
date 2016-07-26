import FixtureDb from '../fixtures'

class Product {

  constructor(id, name, price) {
    this.id = id
    this.name = name
    this.price = price
  }

  getId() { return this.id }

  getName() { return this.name }

  getPrice() { return this.price }

  find(id) {
    let filtered = FixtureDb.products.filter(prod => prod.id == id)
    if (filtered.length == 0) return false
    this.id = id
    this.name = filtered[0].name
    this.price = filtered[0].price
    return true 
  }

  getProducts() {
    return [...FixtureDb.products]
  }

}

export default Product
