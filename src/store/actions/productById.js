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