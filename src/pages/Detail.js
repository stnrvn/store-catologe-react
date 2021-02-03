import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'

function Detail () {
  const { id } = useParams()
  const url = `https://fakestoreapi.com/products/${id}`

  const { data:product, loading, error } = useFetch(url)

  if (error) return (
    // <div className="modal" id="myModal" tabindex="-1">
    //   <div className="modal-dialog">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title">Modal title</h5>
    //         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //       </div>
    //       <div className="modal-body">
    //         <p>Modal body text goes here.</p>
    //       </div>
    //       <div className="modal-footer">
    //         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //         <button type="button" className="btn btn-primary">Save changes</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
    <h1>error!</h1>
    </>
  )

  else if (loading) return (
    <div className="spinner-border m-5" role="status">
    </div>
  )

  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 mt-3">
            <div class="card bg-light border-light shadow text-white">
                <img src={ product.image } class="card-img" alt={ product.title } />
                </div>
          </div>
          <div className="col-lg-9 mt-4">
              <h5 className="text-muted">Prodcut Name:</h5>
              <h2>{ product.title }</h2>
              <h5 className="text-muted pt-3">Description:</h5>
              <h2>{ product.description }</h2>
              <h5 className="text-muted text-justify pt-3">Category:</h5>
              <h2>{ product.category }</h2>
              <h5 className="text-muted pt-3">Price:</h5>
              <h2>${ product.price }</h2>
          </div>
        </div>
      </div>
  )
}

export default Detail