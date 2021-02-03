import React from 'react'
import ProductCard from '../components/ProductCard'
import useFetch from '../hooks/useFetch'

function Home () {
  const url = 'https://fakestoreapi.com/products'
  const { data: products, loading, error } = useFetch(url)
  
  if (error) return (
    <div className="modal" id="myModal" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )

  else if (loading) return (
    <div className="spinner-border m-5" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )

  return (
    <>
      {
        products.map(product => {
          return (
            <ProductCard key="product.id" product={ product } />
          )
        })
      }
    </>
  )
}

export default Home
