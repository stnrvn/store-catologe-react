import React from 'react'
import ProductCard from '../components/ProductCard'

class Home extends React.Component {
  constructor () {
    super ()

    this.state = {
      products: []
    }
  }

  componentDidMount () {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        this.setState ({
          products: data
        })
      })
  }

  render () {
    const { products } = this.state

    return (
      <div className="container">
        <div className="row">
        {
          products.map(product => {
            return <ProductCard key={ product.id } product={ product } />
          })
        }
        </div>
      </div>
    )
  }
}

export default Home
