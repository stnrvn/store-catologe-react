export const fetchData = (data) => {
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

export const getDetail = (id) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)

        const data = await response.json()

        dispatch({
          type: 'PRODUCT_BY_ID',
          payload: data
        })

      } catch (error) {
        console.log(error)
      }
    }
}