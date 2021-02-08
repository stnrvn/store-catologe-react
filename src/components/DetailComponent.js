function DetailComponent (props) {
  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 mt-3">
            <div className="card bg-light border-light shadow text-white">
                <img src={ props.productDetail.image } className="card-img" alt={ props.productDetail.title } />
                </div>
          </div>
          <div className="col-lg-9 mt-4">
              <h5 className="text-muted">Prodcut Name:</h5>
              <h2>{ props.productDetail.title }</h2>
              <h5 className="text-muted pt-3">Description:</h5>
              <h2>{ props.productDetail.description }</h2>
              <h5 className="text-muted text-justify pt-3">Category:</h5>
              <h2>{ props.productDetail.category }</h2>
              <h5 className="text-muted pt-3">Price:</h5>
              <h2>${ props.productDetail.price }</h2>
              <a href="/">Home</a>
          </div>
        </div>
      </div>
  )
}

export default DetailComponent