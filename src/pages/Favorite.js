import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { useEffect } from 'react'

function Favorite () {
  const { favorites } = useSelector((state) => state.favorites)

  useEffect(() => {
    console.log(favorites, 'data dari favorite')
  }, [favorites])

  return (
    <>
      {
        favorites.map((favorite) => {
          return <ProductCard key={ favorite.id } data={favorite} />
        })
      }
    </>
  )
}

export default Favorite