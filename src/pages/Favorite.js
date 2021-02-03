import { useSelector } from 'react-redux'
import FavoriteCard from '../components/FavoriteCard'
import { useEffect } from 'react'

function Favorite () {
  const { favorites } = useSelector((state) => state)

  useEffect(() => {
    console.log(favorites)
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