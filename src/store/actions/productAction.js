export const fetchData = () => {
    return async (dispatch) => {
      try {
        dispatch({
          type: 'FETCH_DATA_START'
        })
        const response = await fetch('https://fakestoreapi.com/products')

        const data = await response.json()

        dispatch({
          type: 'FETCH_DATA',
          payload: data
        })

      } catch (error) {
        console.log(error)
      }
    }
}
