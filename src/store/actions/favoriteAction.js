export const favorite = (newFavorite) => {
  return {
    type: 'ADD_FAVORITE',
    payload: newFavorite
  }
}