import { useEffect } from 'react'

function FavoriteCard (props) {
  useEffect(() => {
    console.log(props.favorite, 'data props dari pages favorite');
  }, [props])

  return (
    <div className="container">
      <div className="row">
              <div className="col-lg-3 mt-3">
                <div className="card border-light shadow h-100" style={{ width: 'auto' }}>
                    <div className="card-body">
                      <img src={ props.favorite.image } className="card-img-top" alt={ props.favorite.title } style={{ width: '100%', height: '40vh', objectFit: 'contain' }} />
                      <h5 className="card-title text-center">{ props.favorite.title }title</h5>
                    </div>
                      <p className="card-text text-center" style={{ color: 'green'}}>${ props.favorite.price }</p>
                </div>
              </div>
      </div>
    </div>
  )
}

export default FavoriteCard