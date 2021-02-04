import { useSelector } from 'react-redux'
import FavoriteCard from '../components/FavoriteCard'
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
          return <FavoriteCard key={ favorite.id } favorite={favorite} />
        })
      }
    </>
  )
}

export default Favorite