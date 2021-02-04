import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../store/actions/productAction'

function Detail () {
  const { id } = useParams()
  const productById = useSelector((state) => state.productById)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetail(id))
    console.log(productById, 'ini get detail')
  }, [])

  return (
    <>
      <h1>{ productById }</h1>
    </>
      // <div className="container-fluid">
      //   <div className="row">
      //     <div className="col-lg-3 mt-3">
      //       <div class="card bg-light border-light shadow text-white">
      //           <img src={ productById.image } class="card-img" alt={ productById.title } />
      //           </div>
      //     </div>
      //     <div className="col-lg-9 mt-4">
      //         <h5 className="text-muted">Prodcut Name:</h5>
      //         <h2>{ productById.title }</h2>
      //         <h5 className="text-muted pt-3">Description:</h5>
      //         <h2>{ productById.description }</h2>
      //         <h5 className="text-muted text-justify pt-3">Category:</h5>
      //         <h2>{ productById.category }</h2>
      //         <h5 className="text-muted pt-3">Price:</h5>
      //         <h2>${ productById.price }</h2>
      //     </div>
      //   </div>
      // </div>
  )
}

export default Detail