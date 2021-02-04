export const favorite = (newFavorite) => {
  // return {
  //   type: 'ADD_FAVORITE',
  //   payload: newFavorite
  // }

  return (dispatch) => {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: newFavorite
    })
  }
}