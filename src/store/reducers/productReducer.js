const initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        products: action.payload
      }
      default:
        return state
  }
}

export default productReducer