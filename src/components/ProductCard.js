import React from 'react'

class ProductCard extends React.Component {
  render () {
    const { product } = this.props
    return (
      <div className="col-3 mt-3">
        <div className="card border-light shadow" style={{ width: '18rem' }}>
            <img src={ product.image } className="card-img-top" alt={ product.title } />
            <div className="card-body">
                <div className="row">
                    <h5 className="card-title text-center">{ product.title }</h5>
                    <p className="card-text text-center">{ product.price }</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default ProductCard