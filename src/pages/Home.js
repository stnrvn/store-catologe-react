import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/actions/productAction'

import { NavbarComponent } from '../components/Navbar'

function Home () {
  const { products, isLoading } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <NavbarComponent />
      {
        isLoading ? (
          <div className="spinner-border m-5" role="status"></div>
        ) : (
          <div className="container">
            <div className="row">
              {
                products.map(product => {
                  return <ProductCard key={ product.id } data={ product } />
                })
              }
            </div>
          </div>
        )
      }
    </>
  )
}

export default Home
