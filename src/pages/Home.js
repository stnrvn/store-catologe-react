import React from 'react'
import ProductCard from '../components/ProductCard'

class Home extends React.Component {
  constructor () {
    super ()

    this.state = {
      products: [
        {
          id: 0,
          title: '',
          price: 0,
          description: '',
          category: '',
          image: ''
        }
      ]
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
        {
          products.map(product => {
            return <ProductCard key={ product.id } product={ product } />
          })
        }
      </div>
    )
  }
}

export default Home
