import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { favorite } from '../store/actions/favoriteAction'
import { useEffect } from 'react'


function ProductCard (props) {
  const { favorites } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(favorites, 'ini favor')
  }, [favorites])

  function addFav () {
    dispatch(favorite(props.product))
    console.log(props.product, 'berhasil!')
  }

  return (
    <div className="container">
      <div className="row">
              <div className="col-lg-3 mt-3">
                <div className="card border-light shadow h-100" style={{ width: 'auto' }}>
                    <div className="card-body">
                      <img src={ props.product.image } className="card-img-top" alt={ props.product.title } style={{ width: '100%', height: '40vh', objectFit: 'contain' }} />
                      <h5 className="card-title text-center">{ props.title } title</h5>
                    </div>
                      <p className="card-text text-center" style={{ color: 'green'}}>${ props.product.price }</p>
                      <button onClick={addFav}>Favorite</button>
                      <Link to={`/detail/${props.product.id}`} className="btn btn-primary">Detail</Link>
                      <Link to={`/favorite`} className="btn btn-primary">favorite</Link>
                </div>
              </div>
      </div>
    </div>
  )
}

export default ProductCard
