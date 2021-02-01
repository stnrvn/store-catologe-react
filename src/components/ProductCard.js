import React from 'react'

class ProductCard extends React.Component {
  render () {
    const { product } = this.props
    return (
      <div className="col-lg-3 mt-3">
        <div className="card border-light shadow h-100" style={{ width: 'auto' }}>
            <div className="card-body">
            <img src={ product.image } className="card-img-top" alt={ product.title } style={{ width: '100%', height: '40vh', objectFit: 'contain' }} />
                    <h5 className="card-title text-center">{ product.title }</h5>
                </div>
                    <p className="card-text text-center" style={{ color: 'green'}}>${ product.price.toLocaleString('en-US') }</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
  }
}

export default ProductCard