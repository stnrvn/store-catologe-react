export const favorite = (newFavorite) => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: newFavorite
    })
  }
}