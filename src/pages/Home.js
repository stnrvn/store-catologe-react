import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/actions/productAction'

function Home () {
  const { products, isLoading } = useSelector((state) => ({
    products: state.products,
    isLoading: state.isLoading
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  // if (error) return (
  //   <div className="modal" id="myModal" tabindex="-1">
  //     <div className="modal-dialog">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <h5 className="modal-title">Modal title</h5>
  //           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  //         </div>
  //         <div className="modal-body">
  //           <p>Modal body text goes here.</p>
  //         </div>
  //         <div className="modal-footer">
  //           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  //           <button type="button" className="btn btn-primary">Save changes</button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
  
  if (isLoading) return (
    <div className="spinner-border m-5" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )

  return (
    <>
      {
        isLoading ? (
          <div className="spinner-border m-5" role="status"></div>
        ) : (
          <div className="container">
            <div className="row">
              {
              products.products.map(product => {
                return (
                  <ProductCard key={ product.id } product={ product } isLoading={isLoading} />
                )
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
