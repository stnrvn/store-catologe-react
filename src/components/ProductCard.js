import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { favorite } from '../store/actions/favoriteAction'
import { useEffect } from 'react'


function ProductCard (props) {
  const { favorites } = useSelector((state) => state.favorites)
  const dispatch = useDispatch()
  const data = props.data
  useEffect(() => {
  }, [favorites])

  function addFav () {
    dispatch(favorite(data))
  }

  return (
    <div className="col-lg-3 mt-3">
      <div className="card border-light shadow h-100" style={{ width: 'auto' }}>
        <div className="card-body">
          <img src={ data.image } className="card-img-top" alt={ data.title } style={{ width: '100%', height: '20vh', objectFit: 'contain' }} />
          <h5 className="card-title text-center">{ data.title }</h5>
        </div>
          <p className="card-text text-center" style={{ color: 'green'}}>${ data.price }</p>
          <button onClick={ addFav } className="btn btn-dark">Favorite</button>
          <Link to={`/detail/${ data.id}`} className="btn btn-primary">Detail</Link>
          <Link to={`/favorite`} className="btn btn-danger">Favorite page</Link>
      </div>
    </div>
  )
}

export default ProductCard
