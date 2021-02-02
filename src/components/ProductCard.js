import useFetch from '../hooks/useFetch'

function ProductCard () {
  const url = 'https://fakestoreapi.com/productss'
  const { data: products, loading, error } = useFetch(url)

  if (error) return (
    // <div className="modal" tabindex="-1">
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
    <div className="container">
    <div className="spinner-grow" role="status" style={{ position: 'relative', left: 'calc(50% - 50px)', top: '50%'}}>
      <span className="visually-hidden">Loading...</span>
    </div>
    </div>
  )
  return (
    <div className="container">
      <div className="row">
        { products.map(product => {
            return (
              <div className="col-lg-3 mt-3" key={ product.id }>
                <div className="card border-light shadow h-100" style={{ width: 'auto' }}>
                    <div className="card-body">
                      <img src={ product.image } className="card-img-top" alt={ product.title } style={{ width: '100%', height: '40vh', objectFit: 'contain' }} />
                      <h5 className="card-title text-center">{ product.title }</h5>
                    </div>
                      <p className="card-text text-center" style={{ color: 'green'}}>${ product.price.toLocaleString('en-US') }</p>
                      <button className="btn btn-primary">Detail</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductCard
